

// 插件是一个类
class CopyrightWebpackPlugin {
  constructor() {}

  apply(compiler) {
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
      console.log('compiler');
    });
    // 异步时刻
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, callback) => {
      debugger;
      compilation.assets['copyright.txt'] = {
        source: function() {
          return 'copyright by dell lee';
        },
        size: function() {
          return 21;
        }
      };
      callback();
    });
  }
}

module.exports = CopyrightWebpackPlugin;