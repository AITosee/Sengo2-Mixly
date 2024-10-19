import * as Blockly from 'blockly/core';
import { EnMsg, EnCatgories } from '../../../src/language/en';

Object.assign(Blockly.Msg, EnMsg);
Object.assign(window.MSG, EnCatgories);