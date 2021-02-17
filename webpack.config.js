const { resolve } = require('path');
const webpack = require('webpack')
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const devMode  = process.env.NODE_ENV === 'development';
const config = {
  devtool: 'inline-source-map',
  mode: devMode  ? 'development' : 'production',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),    
    filename: devMode ? '[name].js' : 'javascripts/[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'components': resolve(__dirname, './src/components'),
      'assets': resolve(__dirname, './src/assets'),
      'jsonconfig': resolve(__dirname, './src/jsonconfig'),      
      'jsondata': resolve(__dirname, './src/jsondata'),      
      'store': resolve(__dirname, './src/store'),
      'layouts': resolve(__dirname, './src/layouts'),
      'constant': resolve(__dirname, './src/constant'),
      'routes': resolve(__dirname, './src/routes'),
      'api': resolve(__dirname, './src/api'),
      'common': resolve(__dirname, './src/common'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,     
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/i,
        use: [          
          {
            loader: MiniCssExtractPlugin.loader, 
            options: {
                publicPath: ''
            }
          },    
          "css-loader",            
          "postcss-loader",
          "resolve-url-loader",
          "sass-loader",                        
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [     
          {     
            loader : "file-loader",
            options: {              
              name: devMode ? '[name].[ext]' : 'images/[name].[ext]'              
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/i,
        use: [          
          'url-loader'
        ]
      },
    ],
  },
  optimization: {    
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        // common: {
        //   test: /[\\/]src[\\/]components[\\/]controls[\\/]/,
        //   chunks: "all",
        //   minSize: 0,
        // },
      },
    },
    minimize: devMode ? false : true,
    minimizer: [      
      new JsonMinimizerPlugin(),
      new CssMinimizerPlugin({ cache: true, parallel: true}),
      new HtmlMinimizerPlugin({ parallel: true }),
    ]
  },
  plugins: [    
    new HtmlWebpackPlugin({
      title: 'Babel + TypeScript + React = ❤️',
      template: 'src/index.html',
    }),
    new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }),
    new MiniCssExtractPlugin({ filename: devMode ? '[name].css' : 'css/[name].css' }),
    new ESLintPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),    
    
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ],
};
if(devMode == false)
{
  config.plugins.push(new TerserPlugin({ parallel: true }));
  config.plugins.push(new CopyPlugin({
    patterns: [
      {                                            
        from: '**/*.json',
        context: resolve(__dirname, "src"),        
        to: '[path][name].[ext]',                
      },
    ],
  }));
}
module.exports = config;
