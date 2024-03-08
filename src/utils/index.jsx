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

const addZero = (value) => {
    return value < 10 ? `0${value}` : value
}

export const formattime  = (ms) => {
    const msToS = ms / 1000;
    const hours = Math.floor(msToS / 3600);
    const minutes = Math.floor(msToS / 60);
    const seconds = Math.floor(msToS % 60);
    return `${hours > 0 ? addZero(hours) + ':' : ''}${addZero(minutes) + ':'}${addZero(seconds)}`
}