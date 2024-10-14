import { Web3Trade2EarnProvider } from './services/trade2earn'
import Routers from './routers'
import { Toaster } from 'react-hot-toast'

const App = () => {
    return (
        <Web3Trade2EarnProvider>
            <Routers />
            <Toaster
                position="bottom-center"
                reverseOrder={true}
                toastOptions={{
                    duration: 5000,
                    style: {
                        fontSize: '15px',
                        width: '100%',
                    },
                }}
            />
        </Web3Trade2EarnProvider>
    )
}

export default App
