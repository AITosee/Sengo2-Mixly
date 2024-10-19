import * as Blockly from 'blockly/core';
import * as generators from './generators/generator';
import * as blocks from './blocks/block';
import './language/loader';
import './css/lib.css';

// 载入图形化模块外观定义文件
Object.assign(Blockly.Blocks, blocks);

// 载入图形化模块代码生成定义文件
if (Blockly.Arduino.forBlock) {
    Object.assign(Blockly.Arduino.forBlock, generators);
} else {
    Object.assign(Blockly.Arduino, generators);
}