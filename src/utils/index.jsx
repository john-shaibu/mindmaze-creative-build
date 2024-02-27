export const loadSounds = async (title, audioSrc) => {
    return new Promise((resolve, reject) => {
        try {
            const audio = new Audio(audioSrc)
            audio.onload = resolve({ title, audio })
        } catch (error) {
            reject('audio could not be loaded')
        }
    })
}

export const formattime  = (ms) => {
    return ''
}