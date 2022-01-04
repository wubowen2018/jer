const chalk = require('chalk')
const { NodeSSH } = require('node-ssh')
const ssh = new NodeSSH()
const jsonFile = require('./deplayServerList.json')

// 获取运行参数
const argv = process.argv.slice(2)[0]
console.log("argv-->d", argv);

//获取服务器配置列表
let serverList = []
switch ( argv ) {
    case 'dev':
        serverList = jsonFile.devServerList
        break;
    case 'tst':
        serverList = jsonFile.tstServerList
        break;
    case 'veri':
        serverList = jsonFile.veriServerList
        break;
    default:
        break;
}
if ( serverList.length === 0 ) {
    console.log(chalk.red("没有获取到服务器！！"));
}

// 上传文件 单个服务器
async function uploadFile( config ){
    try {
        console.log(chalk.yellow(`========== 开始部署${cofig.host} ==========`));
        await ssh.connect({
            host: config.host,
            username: config.username,
            password: config.password,
            port: config.port
        })
        console.log(chalk.green('========== 链接成功！ ========== '));

        const result = await ssh.execCommand( 'rm -rf *', {
            cwd: config.htmlPath + '/'
        })
        if (result.code === 0 || result.code === null ) {
            console.log('删除成功');
        } else {
            console.log('删除失败');
        }

        const failed = []
        const success = []
        const status = await ssh.putDirectory('./dist', config.htmlPath + '/', {
            recursive: true,
            concurrency: 1, //并发数
            tick: function ( localPath, remotePath, error ) {
                if( error ) {
                    failed.push(localPath)
                } else {
                    success.push(localPath)
                }
            }
        })
        if (status) {
            console.log(chalk.green(`============ ${config.host}上传成功 ============`));
        }
        if (failed.length !== 0) {
            console.log(chalk.red(`============ 一下文件上传失败 ============`));
            for (const i in failed) {
                console.log(i);
            }
        }
    } catch( err ) {
        console.log(chalk.red('ssh链接失败'), err);
        process.exit(0)
    }
}

// 批量上传
async function uploadList() {
    for ( let index = 0; index < serverList.length; index++ ) {
        await uploadFile(serverList[index])
    }
    console.log(`========== ${argv} 环境打版结束! ==========`);
}

uploadList()










