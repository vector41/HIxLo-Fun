export function getImageUrl(name: string) {
    return new URL(`${name}`, import.meta.url).href
}

export function dateFormat(date: string) {
    return new Date(date).toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}

export const copyToClipboard = async (
    text: string,
    notifySuccess?: (msg: string) => void,
    notifyError?: (msg: string) => void
) => {
    try {
        await navigator.clipboard.writeText(text)
        if (notifySuccess) notifySuccess('Copied')
    } catch (error) {
        console.error('Failed to copy:', error)
        if (notifyError) notifyError('Failed to copy')
    }
}


export const getRandomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
