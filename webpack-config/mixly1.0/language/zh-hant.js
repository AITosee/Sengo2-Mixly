import * as Blockly from 'blockly/core';
import { ZhHantMsg, ZhHantCatgories } from '../../../src/language/zh-hant';

Object.assign(Blockly.Msg, ZhHantMsg);
Object.assign(window.MSG, ZhHantCatgories);