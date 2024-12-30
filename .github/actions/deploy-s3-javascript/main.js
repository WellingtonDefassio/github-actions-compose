const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    const bucket = core.getInput('bucket', { require: true })
    const bucketRegion = core.getInput('bucket-region', { require: true })
    const distFolder = core.getInput('dist-folder', { require: true })

    github.context

    // 2) upload files
    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)


    core.notice('Hello from mu custom JavaScript Action!')
}


run()