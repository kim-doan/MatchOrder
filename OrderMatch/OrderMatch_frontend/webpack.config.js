import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  // output: { path: path.join(__dirname, "../src/main/resources/static"), filename: "index.bundle.js" },
  output: { path: path.join(__dirname, "dist"), filename: "index.bundle.js", publicPath: "/" },
  mode: process.env.NODE_ENV || "development",
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
  devServer: { contentBase: path.join(__dirname, "src") },
  module: {
      rules: [
          {
              //ES6이상의 문법을 일반적인 ES5구문으로 변경
              test: /\.(js|jsx)$/,
              exclude: /node_modules/, // node_modules 디렉터리는 제외
              use: ['babel-loader']
          },
          {
              test: /\.(css|scss)$/,
              use: [
                  "style-loader", // js 문자열로 스타일 노드를 만들기 위해
                  "css-loader", // css를 CommonJs로 변환
                  "sass-loader" // 기본적으로 Node Sass를 사용하여 Sass를 css로 컴파일
              ]
          },
          {
              test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    publicPath: '/',
                    esModule: false
                  }
                }
              ]
          }
      ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    })
  ]
};