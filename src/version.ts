import fetch from 'node-fetch'

const getLatestVersion = async () => {
    const response = await fetch(
        'https://github.com/DudeBro249/docrunner/releases/latest/'
    )

    const splitUrl = response.url.split('/')
    const version = splitUrl[splitUrl.length - 1]
    return version
}

export { getLatestVersion }
