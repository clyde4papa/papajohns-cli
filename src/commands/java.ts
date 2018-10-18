import {Command, flags} from '@oclif/command';
import * as sh from 'shelljs';

let installJava = false;
export default class Java extends Command {
  static description = 'Verify, Install, or Remove Java from a PJI application server';

  static examples = [
    `$ pji java
    java world from ./src/java.ts!
    `,
  ];

  static flags = {
    // DO NOT REMOVE
    help: flags.help({char: 'h'}),

    install: flags.string({
      char: 'i',
      description: '[PJI] Install Oracle Java',
    }),

    remove: flags.boolean({char: 'r'})
  };

  static args = [{
    name: 'version',               // name of arg to show in help and reference with args[name]
    required: false,            // make the arg required with `required: true`
    description: 'Version of Java to Install', // help description
    hidden: false,               // hide this arg from help
    default: '1.8.0_181',           // default value if no arg input
    options: ['1.8.0_181', '1.8.0_161', '1.8.0_111'],
  }];

  async run() {
    const {args, flags} = this.parse(Java);
    this.log('args: ', args);
    this.log('flags: ', flags);
    await this.verifyJava(args.version);
    if (installJava) {
      this.installJava(args.version);
    }

    // const name = flags.name || 'world';
    // this.log(`java ${name} from ./src/commands/java.ts`);
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`);
    // }
  }

  async verifyJava(version: string) {
    sh.exec('java -version 2>&1 | awk -F \'"\' \'/version/ {print $2}\'', (code: any, output: string) => {
      let installedVersion = output.trim();
      if (code === 0 && version === installedVersion) {
        this.log(`JAVA version: ${version} is installed`);
        installJava = false;
      } else {
        this.log(`JAVA version: ${version} is not installed.`);
        installJava = true;
      }
    });
  }

  installJava(versionToInstall: string) {
    // const javaVersionLinks: any = {
    //   '1.8.0_111': {
    //     linux: 'http://download.oracle.com/otn/java/jdk/8u111-b14/jdk-8u111-linux-x64.rpm',
    //     mac: 'http://download.oracle.com/otn/java/jdk/8u111-b14/jdk-8u111-macosx-x64.dmg'
    //   },
    //   '1.8.0_161': {
    //     linux: 'http://download.oracle.com/otn/java/jdk/8u161-b12/2f38c3b165be4555a1fa6e98c45e0808/jdk-8u161-linux-x64.rpm',
    //     mac: 'http://download.oracle.com/otn/java/jdk/8u161-b12/2f38c3b165be4555a1fa6e98c45e0808/jdk-8u161-macosx-x64.dmg'
    //   },
    //   '1.8.0_181': {
    //     linux: 'http://download.oracle.com/otn/java/jdk/8u181-b13/96a7b8442fe848ef90c96a2fad6ed6d1/jdk-8u181-linux-x64.rpm',
    //     mac: 'http://download.oracle.com/otn/java/jdk/8u181-b13/96a7b8442fe848ef90c96a2fad6ed6d1/jdk-8u181-macosx-x64.dmg'
    //   },
    // };
    //
    // // curl -v -j -k -L -H "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/6u27-b07/jdk-6u27-linux-x64-rpm.bin > jdk-6u27-linux-x64-rpm.bin
    // const javaVersionFiles: any = {
    //   '1.8.0_111': 'jdk-8u111-linux-x64.rpm',
    //   '1.8.0_161': 'jdk-8u161-linux-x64.rpm',
    //   '1.8.0_181': 'jdk-8u181-linux-x64.rpm',
    // };
    //
    this.log(`DOWNLOADING ORACLE JAVA VERSION ${versionToInstall}`);
    // sh.exec(`curl -L -b "oraclelicense=a" -O ${javaVersionLinks[versionToInstall]}`,
    //   (code: any, output: any) => {
    //     if (code === 0) {
    //       this.log('JAVA DOWNLOADED SUCCESSFULLY');
    //
    //       // IF LINUX
    //       sh.exec(`sudo yum localinstall${javaVersionFiles[versionToInstall]}`,
    //         (code: any, output: any) => {
    //           sh.echo(`Output: ${output}`);
    //         });
    //
    //       // IF MAC
    //
    //       // IF WINDOWS
    //     }
    //   });
  }
}
