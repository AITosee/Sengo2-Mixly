// import { JSFuncs, Boards } from 'mixly'
import * as Blockly from 'blockly/core'

export const SentryVisionObj = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var dropdown_res_obj = this.getFieldValue('vision_res_obj')
    return [[dropdown_vision_obj, dropdown_res_obj], generator.ORDER_ATOMIC]
}

export const Sentry1VisionObj = SentryVisionObj
export const SentryVisionObjColor = SentryVisionObj
export const Sentry1VisionObjColor = SentryVisionObj
export const SentryVisionObjLine = SentryVisionObj
export const Sentry1VisionObjLine = SentryVisionObj
export const SentryVisionCustom = SentryVisionObj
export const SentryVisionObjQr = SentryVisionObj
export const Sentry1VisionObjQr = SentryVisionObj

export const SentryVisionCard20Classes = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var dropdown_lable_obj = this.getFieldValue('vision_card_obj')
    return [[dropdown_vision_obj, dropdown_lable_obj], generator.ORDER_ATOMIC]
}

export const Sentry1VisionColor = SentryVisionCard20Classes
export const Sentry1VisionCardBlob = SentryVisionCard20Classes
export const Sentry1VisionCard = SentryVisionCard20Classes
export const Sentry1VisionBall = SentryVisionCard20Classes
export const SentryVisionColor = SentryVisionCard20Classes
export const SentryVisionCardBlob = SentryVisionCard20Classes
export const SentryVisionCard = SentryVisionCard20Classes

export const Sentry1Begin = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_mode_obj = this.getFieldValue('mode_obj')
    var dropdown_addr_obj = this.getFieldValue('addr_obj')

    generator.definitions_['include_Sentry'] = '#include <Sentry.h>'
    generator.definitions_[
        `var_declare_Sentry1`
    ] = `Sentry1 sentry1(${dropdown_addr_obj});`

    if (dropdown_mode_obj == 'Wire') {
        generator.definitions_['include_Wire'] = '#include <Wire.h>'
        generator.setups_['setup_Wire'] = 'Wire.begin();\n'
    }

    var code = `while (SENTRY_OK != sentry1.begin(&${dropdown_mode_obj})) {yield();}\n`

    return code
}

export const Sentry1SetDefault = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    return `sentry1.SensorSetDefault();\n`
}

export const Sentry1SetCoordinateType = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_coord_obj = this.getFieldValue('coord_obj')
    return `sentry1.SeneorSetCoordinateType(${dropdown_coord_obj});\n`
}

export const Sentry1VisionSetStatus = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_VisionStatus = this.getFieldValue('VisionStatus')
    var dropdown_vision_obj = this.getFieldValue('vision_obj')

    return `sentry1.Vision${dropdown_VisionStatus}(${dropdown_vision_obj});\n`
}

export const Sentry1VisionSetParamNum = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var input_num = this.getFieldValue('num') || 1

    return `sentry1.SetParamNum(${dropdown_vision_obj},${input_num});\n`
}

export const Sentry1VisionBlobSetParam = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var input_index = this.getFieldValue('index') || 1
    var input_x = this.getFieldValue('x')
    var input_y = this.getFieldValue('y')
    var input_w = this.getFieldValue('w')
    var input_h = this.getFieldValue('h')
    var input_l = this.getFieldValue('lable')

    generator.definitions_['param_obj'] = 'sentry_object_t param;\n'

    var code = '\n'
    if (input_x != null) code += `param.x_value = ${input_x};\n`
    if (input_y != null) code += `param.y_value = ${input_y};\n`
    if (input_w != null) code += `param.width = ${input_w};\n`
    if (input_h != null) code += `param.height = ${input_h};\n`
    if (input_l != null) code += `param.label = ${input_l};\n`

    code += `sentry1.SetParam(${dropdown_vision_obj},&param,${input_index});\n`

    return code
}

export const Sentry1VisionColorSetParam = Sentry1VisionBlobSetParam

export const Sentry1LedSetColor = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var color_dic = {
        '#000000': 'kLedClose',
        '#ff0000': 'kLedRed',
        '#00ff00': 'kLedGreen',
        '#ffff00': 'kLedYellow',
        '#0000ff': 'kLedBlue',
        '#ff00ff': 'kLedPurple',
        '#00ffff': 'kLedCyan',
        '#ffffff': 'kLedWhite',
    }

    var dropdown_led_color_obj1 =
        color_dic[this.getFieldValue('led_color_obj1')]
    var dropdown_led_color_obj2 =
        color_dic[this.getFieldValue('led_color_obj2')]

    var input_level =
        generator.valueToCode(this, 'level', generator.ORDER_ATOMIC) || '1'

    return `sentry1.LedSetColor(${dropdown_led_color_obj1},${dropdown_led_color_obj2},${input_level});\n`
}

export const Sentry1SetZoom = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_zoom_obj = this.getFieldValue('zoom_obj')

    return `sentry1.CameraSetZoom(${dropdown_zoom_obj});\n`
}

export const Sentry1SetAWB = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_awb_obj = this.getFieldValue('awb_obj')

    return `sentry1.CameraSetAwb(${dropdown_awb_obj});\n`
}

export const Sentry1VisionGetStatus = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')

    var code = `sentry1.VisionGetStatus(${dropdown_vision_obj})`
    return [code, generator.ORDER_ATOMIC]
}

export const Sentry1VisionDetectedCount = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')

    var code = `sentry1.GetValue(${dropdown_vision_obj}, kStatus)`
    return [code, generator.ORDER_ATOMIC]
}

export const Sentry1GetValue = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var sentry_value_obj = generator
        .valueToCode(this, 'sentry_value_obj', generator.ORDER_ATOMIC)
        .split(',')
    var input_index =
        generator.valueToCode(this, 'index', generator.ORDER_ATOMIC) || '0'

    var code = `sentry1.GetValue(${sentry_value_obj[0]},${sentry_value_obj[1]},${input_index})`
    return [code, generator.ORDER_ATOMIC]
}

export const Sentry1GetQrValue = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var code = `String(sentry1.GetQrCodeValue())`
    return [code, generator.ORDER_ATOMIC]
}

export const Sentry1VisionDetected = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var sentry_detected_obj = generator
        .valueToCode(this, 'sentry_detected_obj', generator.ORDER_ATOMIC)
        .split(',')
    var input_index =
        generator.valueToCode(this, 'index', generator.ORDER_ATOMIC) || '0'

    var code = `(sentry1.GetValue(${sentry_detected_obj[0]},kLabel,${input_index})==${sentry_detected_obj[1]})`
    return [code, generator.ORDER_ATOMIC]
}

// Sentry2
export const SentryBegin = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_mode_obj = this.getFieldValue('mode_obj')
    var dropdown_addr_obj = this.getFieldValue('addr_obj')

    generator.definitions_['include_Sentry'] = '#include <Sentry.h>'
    generator.definitions_[
        `var_declare_Sentry`
    ] = `Sentry2 sentry(${dropdown_addr_obj});`

    if (dropdown_mode_obj == 'Wire') {
        generator.definitions_['include_Wire'] = '#include <Wire.h>'
        generator.setups_['setup_Wire'] = 'Wire.begin();\n'
    }

    var code = `while (SENTRY_OK != sentry.begin(&${dropdown_mode_obj})) {yield();}\n`

    return code
}

export const SentrySetDefault = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    return `sentry.SensorSetDefault();\n`
}

export const SentrySetCoordinateType = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_coord_obj = this.getFieldValue('coord_obj')
    return `sentry.SeneorSetCoordinateType(${dropdown_coord_obj});\n`
}

export const SentryVisionSetStatus = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_VisionStatus = this.getFieldValue('VisionStatus')
    var dropdown_vision_obj = this.getFieldValue('vision_obj')

    return `sentry.Vision${dropdown_VisionStatus}(${dropdown_vision_obj});\n`
}

export const SentryVisionSetParamNum = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var input_num = this.getFieldValue('num')

    return `sentry.SetParamNum(${dropdown_vision_obj},${input_num});\n`
}

export const SentryVisionSetParam = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')
    var input_index = this.getFieldValue('index')
    var input_x = this.getFieldValue('x')
    var input_y = this.getFieldValue('y')
    var input_w = this.getFieldValue('w')
    var input_h = this.getFieldValue('h')
    var input_l = this.getFieldValue('lable')

    generator.definitions_['param_obj'] = 'sentry_object_t param;\n'

    var code = '\n'
    if (input_x != null) code += `param.x_value = ${input_x};\n`
    if (input_y != null) code += `param.y_value = ${input_y};\n`
    if (input_w != null) code += `param.width = ${input_w};\n`
    if (input_h != null) code += `param.height = ${input_h};\n`
    if (input_l != null) code += `param.label = ${input_l};\n`

    code += `sentry.SetParam(${dropdown_vision_obj},&param,${input_index});\n`

    return code
}

export const SentryVisionBlobSetParam = SentryVisionSetParam
export const SentryVisionColorSetParam = SentryVisionSetParam

export const SentryLedSetColor = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var color_dic = {
        '#000000': 'kLedClose',
        '#ff0000': 'kLedRed',
        '#00ff00': 'kLedGreen',
        '#ffff00': 'kLedYellow',
        '#0000ff': 'kLedBlue',
        '#ff00ff': 'kLedPurple',
        '#00ffff': 'kLedCyan',
        '#ffffff': 'kLedWhite',
    }

    var dropdown_led_color_obj1 =
        color_dic[this.getFieldValue('led_color_obj1')]
    var dropdown_led_color_obj2 =
        color_dic[this.getFieldValue('led_color_obj2')]

    var input_level =
        generator.valueToCode(this, 'level', generator.ORDER_ATOMIC) || '1'

    return `sentry.LedSetColor(${dropdown_led_color_obj1},${dropdown_led_color_obj2},${input_level});\n`
}

export const SentrySetZoom = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_zoom_obj = this.getFieldValue('zoom_obj')

    return `sentry.CameraSetZoom(${dropdown_zoom_obj});\n`
}

export const SentrySetAWB = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_awb_obj = this.getFieldValue('awb_obj')

    return `sentry.CameraSetAwb(${dropdown_awb_obj});\n`
}

export const SentryVisionDetectedCount = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var dropdown_vision_obj = this.getFieldValue('vision_obj')

    var code = `sentry.GetValue(${dropdown_vision_obj}, kStatus)`
    return [code, generator.ORDER_ATOMIC]
}

export const SentryGetValue = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var sentry_value_obj = generator
        .valueToCode(this, 'sentry_value_obj', generator.ORDER_ATOMIC)
        .split(',')
    var input_index =
        generator.valueToCode(this, 'index', generator.ORDER_ATOMIC) || '0'

    var code = `sentry.GetValue(${sentry_value_obj[0]},${sentry_value_obj[1]},${input_index})`
    return [code, generator.ORDER_ATOMIC]
}

export const SentryGetQrValue = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var code = `String(sentry.GetQrCodeValue())`
    return [code, generator.ORDER_ATOMIC]
}

export const SentryVisionDetected = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var sentry_detected_obj = generator
        .valueToCode(this, 'sentry_detected_obj', generator.ORDER_ATOMIC)
        .split(',')
    var input_index =
        generator.valueToCode(this, 'index', generator.ORDER_ATOMIC) || '0'

    var code = `(sentry.GetValue(${sentry_detected_obj[0]},kLabel,${input_index})==${sentry_detected_obj[1]})`
    return [code, generator.ORDER_ATOMIC]
}

export const SentryRows = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var code = `sentry.rows()`
    return [code, generator.ORDER_ATOMIC]
}

export const SentryCols = function (_, generator) {
    generator = generator ?? Blockly.Arduino
    var code = `sentry.cols()`
    return [code, generator.ORDER_ATOMIC]
}
