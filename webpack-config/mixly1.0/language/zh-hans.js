import * as Blockly from 'blockly/core';
import { ZhHansMsg, ZhHansCatgories } from '../../../src/language/zh-hans';

Object.assign(Blockly.Msg, ZhHansMsg);
Object.assign(window.MSG, ZhHansCatgories);