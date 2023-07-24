import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /*Typography*/
    --font: 'https://drive.google.com/drive/folders/1WDIWa_QmtuIXPKPqcypg5yO2xDGPH3yq?usp=sharing';

    /*font-size*/
    --base-font-size: 16px;
    --head-font-size: 22px;

    /*colors*/
    --yellowDark: #F5C247;
    --yelloLight: #F7D88F;
    --yello: #FCECC7;
    --lightgray: #A2A2A2;


    --grayDark: #4A4A4A;
    --grayLight: #A5A5A5;
    --grayYellow: #A08649;
    --white: #ffff;
    --black: #303B44;

    /*font-weight*/
    --font-bold: 700;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font)
  }

  #root {
    height: 100%
  }

  .ant-card-bordered {
    border: none;
  }

  .ant-tree-show-line .ant-tree-switcher {
    padding-top: 4%;
  }

  .ant-btn > span {
    display: contents;
  }

  .ant-btn > span:hover {
    border-bottom: 2px solid black
  }

  .ant-card-body {
    display: flex;
  }
  .ant-tree .ant-tree-treenode {
    padding: 10px 0 0 20px;
  }
  .ant-card .ant-card-body {
    padding: 12px 0 0 25px;
  }
  .selectedCategory {
    color: #4A4A4A !important;
    border-bottom: 2px solid #4A4A4A;
  }
  canvas{
    width: 100% !important;
    box-shadow: -8px 0 10px -5px rgb(0 0 0 / 0.2);
  }
  .ant-input-affix-wrapper {
    background-color: unset;
    border: unset;
  }

  .ant-input-group-addon {
  display: none !important;
  }
  .ant-layout-header {
    height: 100%;
  }
  .ant-pagination-item {
    border: none !important;
  }

  .ant-pagination-item:hover {
    background-color: unset !important;
    color: red !important;
  }

  .ant-pagination-disabled {
    cursor: pointer !important;
  }

  .resusner-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ant-tree-list {
    background-color: unset !important;
  }
  
  .ant-pagination-item-active {
    background-color: unset !important;
  } 

  .tags-container {
    display: flex;
    flex-wrap: inherit;
    gap: 8px;
  }
  .pagination-container {
    margin-left: auto;
    margin-right: auto;
  }
  .ant-col-3{
    flex: 0 0 18.77%;
    max-width: none;
    }
  .ant-col-5 {
   max-width: 19.55%;
  }
  .ant-col-6{
    max-width: 20%;
  }
  .custom-input ::placeholder {
    font-size: 16px;
    font-weight: 700;
  }
`;
