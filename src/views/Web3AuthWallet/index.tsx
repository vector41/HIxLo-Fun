// App.tsx
import React, { useEffect, useMemo, useState } from 'react'
import { useWeb3Trade2Earn } from '../../services/trade2earn'
import QRCode from 'qrcode.react'
import { Dropdown, Tabs, Flowbite } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import usdtIcon from '../../assets/icon/usdt_icon.png'
import { IoWarning } from 'react-icons/io5'
import { Spinner } from 'flowbite-react'
import bg from '../../assets/img/cover_bg.png'
import Header from '../../components/Header'
import { copyToClipboard, getImageUrl } from '../../utils/utils'

export const Networks: React.FC = () => {
    const {
        networks,
        setNetwork,
        network,
    } = useWeb3Trade2Earn()

    return (
        <div className="w-full rounded-md bg-[#2f0d63] px-4 py-2 relative">
            <div className="flex flex-col justify-center">
                <span className="text-white/50 font-light  leading-5">
                    Select Network
                </span>
                <div className="flex gap-2 items-center">
                    <img
                        src={getImageUrl(
                            `../assets/img/icons/chains/${network?.chain}.svg`
                        )}
                        className="h-7"
                    />
                    <span className="pt-0.5 text-[1.4em]">
                        {network?.chainFullName}
                    </span>
                    <span className="text-white/50 font-light pt-1 ml-1">
                        {network?.chain}
                    </span>
                </div>
            </div>
            <div className="absolute right-0 left-0 flex items-center top-0 bottom-0">
                <Dropdown
                    label=""
                    dismissOnClick={true}
                    inline
                    className="w-full bg-[#320a75] border border-white/25"
                >
                    {networks.map((network, idx) => {
                        if (network.canDeposit && network.canWithdraw) {
                            return (
                                <div key={idx}>
                                    {idx > 0 && <Dropdown.Divider />}
                                    <Dropdown.Item
                                        onClick={() => setNetwork(network)}
                                        className="text-white"
                                    >
                                        <img
                                            src={getImageUrl(
                                                `../assets/img/icons/chains/${network?.chain}.svg`
                                            )}
                                            className="h-5"
                                        />
                                        {network.chainFullName}
                                    </Dropdown.Item>
                                </div>
                            )
                        }
                    })}
                </Dropdown>
            </div>
        </div>
    )
}

const Web3AuthWallet: React.FC = () => {
    const {
        getNetworks,
        depositAddress,
        network,
        balance,
        withdrawFee,
        notifyError,
        notifySuccess,
        withdraw,
    } = useWeb3Trade2Earn()

    const [withdrawAmount, setWithdrawAmount] = useState<string>('0.00')
    const [toAddress, setToAddress] = useState<string>('')

    const minWithdraw = useMemo(() => {
        return (
            withdrawFee?.fee &&
            withdrawFee?.minWithdraw &&
            withdrawFee.fee + withdrawFee.minWithdraw
        )
    }, [withdrawFee?.fee, withdrawFee?.minWithdraw])

    useEffect(() => {
        getNetworks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const customTheme: CustomFlowbiteTheme = {
        tabs: {
            base: 'flex flex-col',
            tablist: {
                base: 'flex text-center',
                styles: {
                    fullWidth:
                        'text-center w-full font-medium grid grid-flow-col mx-auto gap-0.5',
                },
                tabitem: {
                    base: 'text-[1.3em]',
                    styles: {
                        fullWidth: {
                            base: 'rounded-t-2xl flex items-center justify-center pt-3 pb-2 font-medium text-white',
                            active: {
                                on: 'bg-[#42128e]',
                                off: 'bg-[#320a75]',
                            },
                        },
                    },
                },
            },
            tabpanel: 'bg-[#42128e]',
        },
        dropdown: {
            arrowIcon: 'h-6 w-6 p-1',
            content: 'py-1 focus:outline-none sm:overflow-auto sm:h-[18rem]',
            inlineWrapper: 'flex items-center w-full justify-end p-4 h-full',
            floating: {
                base: 'z-10 -mt-2 rounded-md',
                item: {
                    base: 'flex w-full cursor-pointer items-center justify-start px-3 py-3 hover:bg-[#42128e] gap-3',
                },
                divider:
                    'mx-3 h-px bg-gradient-to-r from-transparent via-[#42128e] to-transparent',
            },
        },
    }

    return (
        <div
            className="trade_page flex flex-col h-screen"
            style={{
                background: `url(${bg}) transparent no-repeat center center / cover`,
                width: '100%',
                // backgroundColor: 'rgba(48, 4, 117, 0.9)',
            }}
        >
            <Header />
            <div className="w-full px-[1em] sm:w-[512px] mx-auto text-white my-auto overflow-auto text-[2.2em] py-3 sm:text-[1.6em] md:text-[1.2em] lg:text-[0.9em] xl:text-[0.55em]">
                <Flowbite theme={{ theme: customTheme }}>
                    <Tabs style="fullWidth">
                        <Tabs.Item active title="Deposit">
                            <div className="p-4 flex flex-col gap-3">
                                <div className="w-full rounded-md bg-[#2f0d63] flex justify-between px-4 py-2">
                                    <div className="flex flex-col justify-center">
                                        <span className="text-white/50 font-light leading-5">
                                            Deposit Currency
                                        </span>
                                        <div className="flex gap-2 items-center">
                                            <img
                                                src={usdtIcon}
                                                className="h-5"
                                            />
                                            <span className="text-[1.4em]">
                                                USDT
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-white/50 flex flex-col justify-center gap-1">
                                        <span className="font-light text-[0.9em] leading-5">
                                            Balance:
                                        </span>
                                        <span className="text-[1.2em] leading-5">
                                            {balance?.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <Networks />
                                <div className="w-full rounded-md bg-[#2f0d63] px-4 py-3 relative flex gap-3 items-center">
                                    <div className="bg-white p-2 w-fit h-fit hidden sm:block">
                                        {depositAddress ? (
                                            <QRCode value={depositAddress} />
                                        ) : (
                                            <div className="h-[128px] w-[128px] flex items-center justify-center">
                                                <Spinner
                                                    color="purple"
                                                    size="xl"
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-around gap-4 items-center sm:items-start">
                                        <span className="text-[1.4em]">
                                            Deposit Address
                                        </span>
                                        <div className="bg-white p-2 w-fit h-fit sm:hidden block">
                                            {depositAddress ? (
                                                <QRCode
                                                    value={depositAddress}
                                                />
                                            ) : (
                                                <div className="h-[128px] w-[128px] flex items-center justify-center">
                                                    <Spinner
                                                        color="purple"
                                                        size="xl"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-full flex gap-2 items-center">
                                            <span className="flex-1 text-wrap break-all font-['Arial'] text-[1.1em] text-center sm:text-start">
                                                <span className="text-[#00BB5C] font-bold ">
                                                    {depositAddress?.slice(
                                                        0,
                                                        6
                                                    )}
                                                </span>
                                                <span className="">
                                                    {depositAddress?.slice(
                                                        6,
                                                        -4
                                                    )}
                                                </span>
                                                <span className="text-[#00BB5C] font-bold">
                                                    {depositAddress?.slice(-4)}
                                                </span>
                                            </span>
                                            <button
                                                onClick={() => {
                                                    if (depositAddress)
                                                        copyToClipboard(
                                                            depositAddress,
                                                            notifySuccess,
                                                            notifyError
                                                        )
                                                }}
                                                className="rounded-lg px-2 py-1 text-white bg-btn-gradient enabled:hover:bg-none border border-sky-600 enabled:hover:border-[#00abfb]"
                                                disabled={
                                                    depositAddress == null
                                                }
                                            >
                                                Copy
                                            </button>
                                        </div>
                                        <span className="flex gap-1 items-center bg-[#00000040] py-1 px-2 w-fit rounded-sm">
                                            <IoWarning className="h-5 text-[#ff5b19] font-bold" />
                                            <span className="text-[0.85em]">
                                                Minimum: 0.025 USDT
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full rounded-md bg-[#542898] p-4">
                                    <span>
                                        <span className="text-[#00BB5C] font-bold">
                                            NOTICE:{' '}
                                        </span>
                                        <span className="">
                                            Send only USDT to this deposit
                                            address. Coins will be deposited
                                            automatically after 6 network
                                            confirmations. Smart contract
                                            addresses are not supported(Contact
                                            us).
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="Withdraw">
                            <div className="p-4 flex flex-col gap-3">
                                <div className="w-full rounded-md bg-[#2f0d63] flex justify-between px-4 py-2">
                                    <div className="flex flex-col justify-center">
                                        <span className="text-white/50 font-light leading-5">
                                            Withdraw Currency
                                        </span>
                                        <div className="flex gap-2 items-center">
                                            <img
                                                src={usdtIcon}
                                                className="h-6"
                                            />
                                            <span className="text-[1.4em]">
                                                USDT
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-white/50 flex flex-col justify-center gap-1">
                                        <span className="font-light leading-5">
                                            Balance:
                                        </span>
                                        <span className="leading-5">
                                            {balance?.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                <Networks />

                                <div>
                                    <label
                                        htmlFor="address"
                                        className="text-white/50 px-1"
                                    >
                                        Withdrawal Address
                                    </label>
                                    <input
                                        name="address"
                                        type="text"
                                        className="w-full p-4 rounded-md bg-[#2f0d63] border-none placeholder:text-white/15 text-[1em]"
                                        placeholder="Fill in carefully according to the specific currency"
                                        value={toAddress}
                                        onChange={(e) =>
                                            setToAddress(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <div className="w-full flex justify-between">
                                        <label
                                            htmlFor="amount"
                                            className="text-white/50 px-1"
                                        >
                                            Withdraw Amount
                                        </label>
                                        <span className="flex gap-1 items-center px-2 text-white/50">
                                            <IoWarning className="h-5 text-[#ff5b19] font-bold" />
                                            <span className="">
                                                Min: {minWithdraw?.toFixed(4)}{' '}
                                                USDT
                                            </span>
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            name="amount"
                                            type="text"
                                            className="w-full p-4 rounded-md bg-[#2f0d63] border-none placeholder:text-white/15 leading-6 text-[1.2em]"
                                            value={withdrawAmount}
                                            onChange={(e) => {
                                                const value = e.target.value
                                                const numberRegex =
                                                    /^[0-9]+(\.[0-9]*)?$/

                                                if (
                                                    numberRegex.test(value) ||
                                                    value === ''
                                                )
                                                    setWithdrawAmount(value)
                                            }}
                                            onFocus={() => {
                                                if (withdrawAmount === '0.00')
                                                    setWithdrawAmount('')
                                            }}
                                        />
                                        <button
                                            onClick={() => {
                                                if (balance && balance > 0)
                                                    setWithdrawAmount(
                                                        balance?.toFixed(2)
                                                    )
                                            }

                                            }
                                            className="text-[0.9em] px-[1em] py-[0.3em] rounded-md border ml-[-5em] hover:opacity-50"
                                        >
                                            Max
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full rounded-md bg-[#2f0d63] flex flex-col px-4 py-3 gap-1">
                                    <div className="w-full flex justify-between">
                                        <span className="text-white/50">
                                            Withdraw Amount:
                                        </span>
                                        <span className="">
                                            {withdrawAmount} USDT
                                        </span>
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <span className="text-white/50">
                                            Fee:
                                        </span>
                                        <span className="">
                                            {withdrawFee?.fee.toFixed(3)} USDT
                                        </span>
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <span className="text-white/50">
                                            Total withdraw amount:
                                        </span>
                                        <span className="">
                                            {(
                                                withdrawFee?.fee &&
                                                parseFloat(withdrawAmount) -
                                                withdrawFee?.fee
                                            )?.toFixed(3)}{' '}
                                            USDT
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full rounded-md bg-[#542898] p-4">
                                    <span>
                                        <span className="text-[#00BB5C] font-bold">
                                            NOTICE:{' '}
                                        </span>
                                        <span className="">
                                            For security purposes, large or
                                            suspicious withdrawal may take 1-6
                                            hours for audit process. We
                                            appreciate your patience!
                                        </span>
                                    </span>
                                </div>

                                <button
                                    onClick={() => {
                                        const amount =
                                            Number.parseFloat(withdrawAmount)

                                        if (!minWithdraw || !network) return

                                        if (minWithdraw > amount) {
                                            notifyError(
                                                'Minimun withdrawal amount is ' +
                                                minWithdraw +
                                                ' USDT.'
                                            )
                                            return
                                        }

                                        if (balance < amount) {
                                            notifyError('Insufficient balance')
                                            return
                                        }

                                        withdraw(
                                            toAddress,
                                            amount,
                                            network.chain
                                        )
                                    }}
                                    className="rounded-md text-white bg-btn-gradient p-3 my-2"
                                >
                                    Confirm
                                </button>
                            </div>
                        </Tabs.Item>
                        {/* <Tabs.Item title="Buy USDT">

                        </Tabs.Item> */}
                    </Tabs>
                </Flowbite>
            </div>
        </div>
    )
}

export default Web3AuthWallet
