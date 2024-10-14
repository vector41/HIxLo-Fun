import React from 'react'
import * as allCurves from '@visx/curve'
import { LinePath } from '@visx/shape'
import {
    Annotation,
    CircleSubject,
    HtmlLabel,
    LineSubject,
} from '@visx/annotation'
import { AxisLeft } from '@visx/axis'
import { Glyph as CustomGlyph } from '@visx/glyph'
import {
    WinStatus,
    bottomPos,
    topPos,
    useWeb3Trade2Earn,
} from '../../services/trade2earn'
import { GridRows } from '@visx/grid'

const greens = ['#ecf4f3', '#68b0ab', '#006a71']
const winStatusColors = [
    ['#0064FB', '#1ECDF8'],
    ['#01c363', '#34FF85'],
    ['#BA2C1F', '#FF8176'],
    ['#01c363', '#BA2C1F'],
]

export const MobileTradingView: React.FC = () => {
    const {
        xScale,
        yScale,
        yScaleForAxis,
        startPointHeight,
        midHeight,
        roundStatus,
        slicedBtcPrices,
        maxY,
        minY,
        getX,
        getY,
        maxX,
        minX,
        lastData,
        height,
        width,
        winStatus,
    } = useWeb3Trade2Earn()

    return roundStatus.currentLocalFrameIndex > 0 ? (
        <svg width={width} height={height}>
            <GridRows
                scale={yScaleForAxis}
                width={width}
                left={-width * 0.12}
                height={height}
                strokeWidth={'0.3em'}
                stroke="rgba(255, 255, 255, 0.05)"
            />
            <AxisLeft
                scale={yScaleForAxis}
                left={width * 0.96}
                numTicks={7}
                tickLabelProps={{
                    fontSize: '1.5em',
                    fill: 'rgba(119, 134, 203, 1)',

                    textAnchor: 'middle',
                }}
                hideAxisLine={true}
                hideTicks={false}
                hideZero
            />
            <LinePath
                curve={allCurves.curveLinear}
                data={slicedBtcPrices}
                x={(d) => xScale(getX(d)) || 0}
                y={(d) => yScale(getY(d)) || 0}
                stroke="white"
                strokeWidth={'0.4em'}
                strokeOpacity={1}
                shapeRendering="geometricPrecision"
            />
            <LinePath
                curve={allCurves.curveBasis}
                data={[
                    {
                        value: maxY + (maxY - minY) * 0.35,
                        localTimeIndex: roundStatus?.tradeStartIndex || 0,
                    },
                    {
                        value: minY - (maxY - minY) * 0.2,
                        localTimeIndex: roundStatus?.tradeStartIndex || 0,
                    },
                ]}
                x={(d) => xScale(getX(d)) || 0}
                y={(d) => yScale(getY(d)) || 0}
                stroke="white"
                strokeWidth={1}
                strokeOpacity={0.5}
                strokeDasharray={'3, 3'}
                shapeRendering="geometricPrecision"
            />

            <LinePath
                curve={allCurves.curveBasis}
                data={[
                    {
                        value: maxY + (maxY - minY) * 0.35,
                        localTimeIndex: roundStatus.endFrameIndex || 0,
                    },
                    {
                        value: minY - (maxY - minY) * 0.2,
                        localTimeIndex: roundStatus.endFrameIndex || 0,
                    },
                ]}
                x={(d) => xScale(getX(d)) || 0}
                y={(d) => yScale(getY(d)) || 0}
                stroke="white"
                strokeWidth={1}
                strokeOpacity={0.5}
                // strokeDasharray={"3, 5"}
                shapeRendering="geometricPrecision"
            />

            {/* <LinePath
                curve={allCurves.curveBasis}
                data={[
                    {
                        value: roundStatus?.startPrice,
                        localTimeIndex: roundStatus?.startFrameIndex,
                    },
                ]}
                x={(d) => xScale(getX(d)) || 0}
                y={(d) => yScale(getY(d)) || 0}
                stroke="white"
                strokeWidth={1.5}
                strokeOpacity={0.5}
                shapeRendering="geometricPrecision"
            /> */}

            {[
                {
                    value: maxY,
                    localTimeIndex: roundStatus.tradeStartIndex,
                },
                { value: maxY, localTimeIndex: roundStatus.endFrameIndex },
            ].map((v, i) => {
                return (
                    <g key={`line-glyph-${i}`}>
                        <CustomGlyph
                            left={
                                ((width * (getX(v) - minX)) / (maxX - minX)) *
                                    0.69 || 0
                            }
                            top={height * 0}
                        >
                            {i % 2 > 0 ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="3.5em"
                                    height="3.5em"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M2.50098 2.50195H10.3193C10.6349 2.50195 10.9235 2.68029 11.0646 2.96261L11.6676 4.16862H16.6676C17.1279 4.16862 17.501 4.54172 17.501 5.00195V14.1686C17.501 14.6289 17.1279 15.002 16.6676 15.002H11.3493C11.0337 15.002 10.7451 14.8236 10.604 14.5413L10.001 13.3353H4.16764V18.3353H2.50098V2.50195Z"
                                        fill="white"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="3.5em"
                                    height="3.5em"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M10.3174 2.50195C10.6329 2.50195 10.9215 2.68029 11.0627 2.96261L11.6657 4.16862H16.6657C17.1259 4.16862 17.499 4.54172 17.499 5.00195V14.1686C17.499 14.6289 17.1259 15.002 16.6657 15.002H11.3474C11.0318 15.002 10.7432 14.8236 10.602 14.5413L9.99902 13.3353H4.16569V18.3353H2.49902V2.50195H10.3174ZM9.80227 4.16862H4.16569V11.6686H11.0291L11.8624 13.3353H15.8324V5.83529H10.6356L9.80227 4.16862Z"
                                        fill="white"
                                    ></path>
                                </svg>
                            )}
                        </CustomGlyph>
                    </g>
                )
            })}

            {roundStatus?.startPrice > 0 &&
            winStatus != WinStatus.TRADE_NOT_STARTED ? (
                <Annotation
                    y={
                        (bottomPos - topPos) * height * (1 - startPointHeight) +
                        height * topPos
                    }
                >
                    <LineSubject
                        orientation={'horizontal'}
                        stroke={'white'}
                        min={0}
                        max={width}
                        strokeWidth={0.5}
                        strokeDasharray={'3, 3'}
                    />
                </Annotation>
            ) : (
                <></>
            )}

            {roundStatus?.startPrice > 0 &&
            winStatus != WinStatus.TRADE_NOT_STARTED ? (
                [
                    {
                        value: roundStatus?.startPrice,
                        localTimeIndex: roundStatus?.tradeStartIndex,
                    },
                ].map((v, i) => {
                    return (
                        <g key={`line-glyph-${i}`}>
                            <CustomGlyph
                                left={
                                    ((width * (getX(v) - minX)) /
                                        (maxX - minX)) *
                                        0.7 || 0
                                }
                                top={
                                    (bottomPos - topPos) *
                                        height *
                                        (1 - startPointHeight) +
                                    height * topPos
                                }
                            >
                                <CircleSubject
                                    stroke={'#222'}
                                    fill="red"
                                    strokeWidth={'0'}
                                    r="0.65em"
                                />
                            </CustomGlyph>
                        </g>
                    )
                })
            ) : (
                <></>
            )}

            <Annotation
                x={width}
                y={
                    (bottomPos - topPos) * height * (1 - midHeight) +
                        height * topPos || 0
                }
            >
                <LineSubject
                    orientation={'horizontal'}
                    stroke={winStatusColors[winStatus][0]}
                    min={0}
                    max={width}
                    strokeDasharray={'5, 5'}
                    strokeWidth={1.5}
                />
                <HtmlLabel
                    showAnchorLine={false}
                    horizontalAnchor={'end'}
                    verticalAnchor={'middle'}
                    containerStyle={{
                        color: 'white',
                        lineHeight: '1em',
                        fontWeight: 200,
                    }}
                >
                    <div>
                        <div
                            className={`w-[18em] overflow-hidden text-center font-600 px-2 py-1 rounded-[2.5em] mr-[1.5em]`}
                            style={{
                                background: `linear-gradient(60deg, ${winStatusColors[winStatus][0]}, ${winStatusColors[winStatus][1]})`,
                            }}
                        >
                            <div className="py-1.5 text-[1.8em] font-light">
                                LIVE BITCOIN
                            </div>
                            <div className="w-[15em] mx-auto bg-gradient-to-r from-[#fff0] via-[#fff] to[#fff0] h-[1px]"></div>
                            <div className="py-1.5 text-[2.5em] font-semibold">
                                {lastData?.value.toFixed(3)}
                            </div>
                        </div>
                    </div>
                </HtmlLabel>
                <CircleSubject
                    cx={width * 0.7}
                    stroke={'#222'}
                    fill="#EFF9FF"
                    strokeWidth={'0'}
                    r=".65em"
                    style={{
                        filter: 'drop-shadow(rgb(239, 249, 255) 0px 0px 1px) drop-shadow(rgb(239, 249, 255) 0px 0px 2px) drop-shadow(rgb(239, 249, 255) 0px 0px 6px) drop-shadow(rgb(62, 99, 221) 0px 0px 13px) drop-shadow(rgb(62, 99, 221) 0px 0px 23px) drop-shadow(rgb(62, 99, 221) 0px 0px 40px)',
                    }}
                />
            </Annotation>

            {roundStatus.startPrice > 0 &&
            winStatus != WinStatus.TRADE_NOT_STARTED ? (
                <HtmlLabel
                    showAnchorLine={false}
                    anchorLineStroke={greens[2]}
                    horizontalAnchor={'start'}
                    verticalAnchor={'middle'}
                    x={0}
                    y={
                        (bottomPos - topPos) * height * (1 - startPointHeight) +
                        height * topPos
                    }
                    containerStyle={{
                        color: 'white',
                        lineHeight: '1em',
                        fontWeight: 200,
                    }}
                >
                    <div>
                        <div
                            className={`w-[15em] overflow-hidden text-center font-600 px-2 py-1 rounded-l-[0.1em] rounded-r-[10em]`}
                            style={{
                                background: `linear-gradient(60deg, ${winStatusColors[0][0]}, ${winStatusColors[0][1]})`,
                            }}
                        >
                            <div className="py-1.5 text-[2.5em] font-medium">
                                {roundStatus?.startPrice.toFixed(3)}
                            </div>
                        </div>
                    </div>

                    {/* <div style={{ display: 'inline-block' }}>
                        <div className="w-28 s1024:w-36 rounded-tl-lg rounded-bl-lg overflow-hidden text-center font-600">
                            <div className="py-0.5 bg-indigo-12 text-text-brand text-[10px]">
                                Start Price
                            </div>
                            <div className="px-2 bg-background-brand text-text-on-color text-headingMd s1024:text-headingXl">
                                {roundStatus?.startPrice}
                            </div>
                        </div>
                    </div> */}
                </HtmlLabel>
            ) : (
                <></>
            )}
            <Annotation
                x={width * 0.7}
                y={
                    (bottomPos - topPos) * height * (1 - midHeight) +
                        height * topPos || 0
                }
                dx={0}
                dy={0}
            >
                <HtmlLabel
                    showAnchorLine={false}
                    // anchorLineStroke={greens[2]}
                    horizontalAnchor={'middle'}
                    verticalAnchor={'start'}
                    containerStyle={
                        {
                            // height: '10em',
                        }
                    }
                >
                    <div className="w-[2em] h-[2em] mt-[-1.5em] rounded-full bg-[#EFF9FFAA] animate-ping"></div>
                </HtmlLabel>
            </Annotation>
        </svg>
    ) : (
        <svg width={width} height={height}></svg>
    )
}
