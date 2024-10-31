import * as Blockly from 'blockly/core'
import { Profile } from 'mixly'

Profile = Profile?.default ? Profile : window.profile

export const white_balance_objs = function () {
    return [
        [Blockly.Msg.SENGO2_AUTO, 'kAutoWhiteBalance'],
        [Blockly.Msg.SENGO2_LOCK_AWB, 'kWhiteLight'],
        [Blockly.Msg.SENGO2_WHITE_LIGHT, 'kYellowLight'],
        [Blockly.Msg.SENGO2_YELLOW_LIGHT, 'kWhiteBalanceCalibrating'],
    ]
}

export const vision_res_objs = function () {
    return [
        [Blockly.Msg.SENGO2_STATE_VALUE_X, 'kXValue'],
        [Blockly.Msg.SENGO2_STATE_VALUE_Y, 'kYValue'],
        [Blockly.Msg.SENGO2_STATE_VALUE_WIDTH, 'kWidthValue'],
        [Blockly.Msg.SENGO2_STATE_VALUE_HEIGHT, 'kHeightValue'],
        [Blockly.Msg.SENGO2_STATE_VALUE_LABEL, 'kLabel'],
    ]
}

export const vision_custom_objs = function () {
    return [
        [Blockly.Msg.SENGO2_VISION_DATA + '1', 'kXValue'],
        [Blockly.Msg.SENGO2_VISION_DATA + '2', 'kYValue'],
        [Blockly.Msg.SENGO2_VISION_DATA + '3', 'kWidthValue'],
        [Blockly.Msg.SENGO2_VISION_DATA + '4', 'kHeightValue'],
        [Blockly.Msg.SENGO2_VISION_DATA + '5', 'kLabel'],
    ]
}

export const vision_qr_objs = function () {
    return [
        [Blockly.Msg.SENGO2_STATE_VALUE_X, 'kXValue'],
        [Blockly.Msg.SENGO2_STATE_VALUE_Y, 'kYValue'],
        [Blockly.Msg.SENGO2_STATE_VALUE_WIDTH, 'kWidthValue'],
        [Blockly.Msg.SENGO2_STATE_VALUE_HEIGHT, 'kHeightValue'],
    ]
}

export const vision_color_objs = function () {
    return [
        [Blockly.Msg.SENGO2_STATE_VALUE_LABEL, 'kLabel'],
        [Blockly.Msg.SENGO2_STATE_VALUE_R, 'kRValue'],
        [Blockly.Msg.SENGO2_STATE_VALUE_G, 'kGValue'],
        [Blockly.Msg.SENGO2_STATE_VALUE_B, 'kBValue'],
    ]
}
export const vision_line_objs = function () {
    return [
        [Blockly.Msg.SENGO2_STATE_LINE_EX, 'kXValue'],
        [Blockly.Msg.SENGO2_STATE_LINE_EY, 'kYValue'],
        [Blockly.Msg.SENGO2_STATE_LINE_SX, 'kWidthValue'],
        [Blockly.Msg.SENGO2_STATE_LINE_SY, 'kHeightValue'],
        [Blockly.Msg.SENGO2_STATE_LINE_A, 'kLabel'],
    ]
}

export const sengo2_vision_blod_objs = function () {
    return [
        [Blockly.Msg.SENGO2_COLOR_BLACK, 'Sengo2::kColorBlack'],
        [Blockly.Msg.SENGO2_COLOR_WHITE, 'Sengo2::kColorWhite'],
        [Blockly.Msg.SENGO2_COLOR_RED, 'Sengo2::kColorRed'],
        [Blockly.Msg.SENGO2_COLOR_GREEN, 'Sengo2::kColorGreen'],
        [Blockly.Msg.SENGO2_COLOR_BLUE, 'Sengo2::kColorBlue'],
        [Blockly.Msg.SENGO2_COLOR_YELLOW, 'Sengo2::kColorYellow'],
    ]
}
export const sengo2_vision_objs = function () {
    return [
        [Blockly.Msg.SENGO2_VISION_VISIONCOLOR, 'Sengo2::kVisionColor'],
        [Blockly.Msg.SENGO2_VISION_VISIONBLOB, 'Sengo2::kVisionBlob'],
        [Blockly.Msg.SENGO2_VISION_VISIONAPRILTAG, 'Sengo2::kVisionAprilTag'],
        [Blockly.Msg.SENGO2_VISION_VISIONLINE, 'Sengo2::kVisionLine'],
        [Blockly.Msg.SENGO2_VISION_VISIONLEARNING, 'Sengo2::kVisionLearning'],
        [Blockly.Msg.SENGO2_VISION_VISIONCARD, 'Sengo2::kVisionCard'],
        [Blockly.Msg.SENGO2_VISION_VISIONFACE, 'Sengo2::kVisionFace'],
        [
            Blockly.Msg.SENGO2_VISION_VISION20CLASSES,
            'Sengo2::kVision20Classes',
        ],
        [Blockly.Msg.SENGO2_VISION_VISIONQRCODE, 'Sengo2::kVisionQrCode'],
        [
            Blockly.Msg.SENGO2_VISION_VISIONMOTIONDETECT,
            'Sengo2::kVisionMotionDetect',
        ]
    ]
}

export const sengo2_vision_param_objs = function () {
    return [
        [Blockly.Msg.SENGO2_VISION_VISIONCOLOR, 'Sengo2::kVisionColor'],
        [Blockly.Msg.SENGO2_VISION_VISIONBLOB, 'Sengo2::kVisionBlob'],
    ]
}
export const sengo2_vision_custom = function () {
    return [
        [Blockly.Msg.SENGO2_VISION_VISIONLEARNING, 'Sengo2::kVisionLearning'],
        [Blockly.Msg.SENGO2_VISION_VISIONFACE, 'Sengo2::kVisionFace'],
    ]
}
export const sengo2_vision_20class_objs = function () {
    return [
        [Blockly.Msg.SENGO2_CLASS20_AIRPLANE, 'Sengo2::kAirplane'],
        [Blockly.Msg.SENGO2_CLASS20_BICYCLE, 'Sengo2::kBicycle'],
        [Blockly.Msg.SENGO2_CLASS20_BIRD, 'Sengo2::kBird'],
        [Blockly.Msg.SENGO2_CLASS20_BOAT, 'Sengo2::kBoat'],
        [Blockly.Msg.SENGO2_CLASS20_BOTTLE, 'Sengo2::kBottle'],
        [Blockly.Msg.SENGO2_CLASS20_BUS, 'Sengo2::kBus'],
        [Blockly.Msg.SENGO2_CLASS20_CAR, 'Sengo2::kCar'],
        [Blockly.Msg.SENGO2_CLASS20_CAT, 'Sengo2::kCat'],
        [Blockly.Msg.SENGO2_CLASS20_CHAIR, 'Sengo2::kChair'],
        [Blockly.Msg.SENGO2_CLASS20_COW, 'Sengo2::kCow'],
        [Blockly.Msg.SENGO2_CLASS20_TABLE, 'Sengo2::kDiningTable'],
        [Blockly.Msg.SENGO2_CLASS20_DOG, 'Sengo2::kDog'],
        [Blockly.Msg.SENGO2_CLASS20_HORSE, 'Sengo2::kHorse'],
        [Blockly.Msg.SENGO2_CLASS20_MOTORBIKE, 'Sengo2::kMotorBike'],
        [Blockly.Msg.SENGO2_CLASS20_PERSON, 'Sengo2::kPerson'],
        [Blockly.Msg.SENGO2_CLASS20_PLANT, 'Sengo2::kPottedPlant'],
        [Blockly.Msg.SENGO2_CLASS20_SHEEP, 'Sengo2::kSheep'],
        [Blockly.Msg.SENGO2_CLASS20_SOFA, 'Sengo2::kSofa'],
        [Blockly.Msg.SENGO2_CLASS20_TRAIN, 'Sengo2::kTrain'],
        [Blockly.Msg.SENGO2_CLASS20_MONITOR, 'Sengo2::kTvMonitor'],
    ]
}

export const sengo2_vision_card_objs = function () {
    return [
        [Blockly.Msg.SENGO2_CARD_FORWARD, 'Sengo2::kCardForward'],
        [Blockly.Msg.SENGO2_CARD_LEFT, 'Sengo2::kCardLeft'],
        [Blockly.Msg.SENGO2_CARD_RIGHT, 'Sengo2::kCardRight'],
        [Blockly.Msg.SENGO2_CARD_TURN_AROUND, 'Sengo2::kCardTurnAround'],
        [Blockly.Msg.SENGO2_CARD_PARK, 'Sengo2::kCardPark'],
        [Blockly.Msg.SENGO2_CARD_GREEN_LIGHT, 'Sengo2::kCardGreenLight'],
        [Blockly.Msg.SENGO2_CARD_RED_LIGHT, 'Sengo2::kCardRedLight'],
        [Blockly.Msg.SENGO2_CARD_SPEED_40, 'Sengo2::kCardSpeed40'],
        [Blockly.Msg.SENGO2_CARD_SPEED_60, 'Sengo2::kCardSpeed60'],
        [Blockly.Msg.SENGO2_CARD_SPEED_80, 'Sengo2::kCardSpeed80'],
    ]
}

export const vision_obj_card_dict = function () {
    return {
        'Sengo2::kVisionBlob': sengo2_vision_blod_objs(),
        'Sengo2::kVisionCard': sengo2_vision_card_objs(),
        'Sengo2::kVision20Classes': sengo2_vision_20class_objs()
    }
}

// Sengo2
export const Sengo2Begin = {
    init: function () {

        var serial_HardwareSelect = Profile.default.serial_HardwareSelect ?? Profile.default.serial_select
        var mode_objs = [['I2C', 'Wire']].concat(serial_HardwareSelect).concat(Profile.default.serial_select)
        mode_objs = Array.from(new Set(mode_objs.map(JSON.stringify))).map(JSON.parse);

        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO2_BEGIN +
                Blockly.Msg.SENGO2_NAME +
                Blockly.Msg.SENGO2_PORT
            )
            .appendField(new Blockly.FieldDropdown(mode_objs), 'mode_obj')
            .appendField(Blockly.Msg.SENGO2_ADDR)
            .appendField(
                new Blockly.FieldDropdown([
                    ['0x60', '0x60'],
                    ['0x61', '0x61'],
                    ['0x62', '0x62'],
                    ['0x63', '0x63'],
                ]),
                'addr_obj'
            )
        this.setInputsInline(true)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
        this.setTooltip(Blockly.Msg.SENGO2_HELP_INIT_TOOLTIP)
    },
}

// 恢复默认设置
export const Sengo2SetDefault = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO2_NAME)
            .appendField(Blockly.Msg.SENGO2_SET_DEFAULT)
        this.setInputsInline(true)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
        this.setTooltip(Blockly.Msg.SENGO2_HELP_SET_DEFAULT)
    },
}

export const Sengo2LedSetColor = {
    init: function () {
        var led_color = [
            '#fff',
            '#000',
            '#f00',
            '#0f0',
            '#ff0',
            '#00f',
            '#f0f',
            '#0ff',
        ]
        var color_detected = new Blockly.FieldColour('#0000ff')
        color_detected.setColours(led_color).setColumns(4)
        var color_undetected = new Blockly.FieldColour('#ff0000')
        color_undetected.setColours(led_color).setColumns(4)

        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO2_SET +
                Blockly.Msg.SENGO2_NAME +
                Blockly.Msg.SENGO2_LED_SET_COLOR
            )
            .appendField(color_detected, 'led_color_obj1')
            .appendField(Blockly.Msg.SENGO2_LED_SET_COLOR_NOT)
            .appendField(color_undetected, 'led_color_obj2')
            .appendField(Blockly.Msg.SENGO2_LED_SET_LEVEL)
            .appendField(new Blockly.FieldNumber(1, 1, 15, 1), 'level')
        this.setInputsInline(true)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
        this.setTooltip(Blockly.Msg.SENGO2_HELP_LED)
    },
}

// 启用算法
export const Sengo2VisionSetStatus = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO2_SET + Blockly.Msg.SENGO2_NAME)
            .appendField(
                new Blockly.FieldDropdown([
                    [Blockly.Msg.SENGO2_ENABLE, 'Begin'],
                    [Blockly.Msg.SENGO2_DISABLE, 'End'],
                ]),
                'VisionStatus'
            )
            .appendField(
                Blockly.Msg.SENGO2_VISION_CN + Blockly.Msg.SENGO2_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown(sengo2_vision_objs()),
                'vision_obj'
            )

        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2SetAWB = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO2_SET +
                Blockly.Msg.SENGO2_NAME +
                Blockly.Msg.SENGO2_CAMERA_SET_AWB
            )
            .appendField(
                new Blockly.FieldDropdown(white_balance_objs()),
                'awb_obj'
            )
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionSetParamNum = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO2_SET +
                Blockly.Msg.SENGO2_NAME +
                Blockly.Msg.SENGO2_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown(sengo2_vision_param_objs()),
                'vision_obj'
            )
            .appendField(' ')
            .appendField(new Blockly.FieldNumber(1, 1, 25, 1), 'num')
            .appendField(Blockly.Msg.SENGO2_SET_PARAMNUM)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionColorSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO2_SET +
                Blockly.Msg.SENGO2_NAME +
                Blockly.Msg.SENGO2_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO2_VISION_VISIONCOLOR,
                        'Sengo2::kVisionColor',
                    ],
                ]),
                'vision_obj'
            )
        this.appendDummyInput('VisionParam')
            .appendField(
                Blockly.Msg.SENGO2_CENTER + Blockly.Msg.SENGO2_STATE_VALUE_X
            )
            .appendField(new Blockly.FieldNumber(50, 0, 9999, 1), 'x')
            .appendField(
                Blockly.Msg.SENGO2_CENTER + Blockly.Msg.SENGO2_STATE_VALUE_Y
            )
            .appendField(new Blockly.FieldNumber(50, 0, 9999, 1), 'y')
            .appendField(Blockly.Msg.SENGO2_STATE_VALUE_WIDTH)
            .appendField(new Blockly.FieldNumber(3, 0, 9999, 1), 'w')
            .appendField(Blockly.Msg.SENGO2_STATE_VALUE_HEIGHT)
            .appendField(new Blockly.FieldNumber(4, 0, 9999, 1), 'h')
            .appendField(Blockly.Msg.SENGO2_SET_PARAM_GROUP)
            .appendField(new Blockly.FieldNumber(1, 1, 25, 1), 'index')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionBlobSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO2_SET +
                Blockly.Msg.SENGO2_NAME +
                Blockly.Msg.SENGO2_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO2_VISION_VISIONBLOB,
                        'Sengo2::kVisionBlob',
                    ],
                ]),
                'vision_obj'
            )
        this.appendDummyInput('VisionParam')
            .appendField(Blockly.Msg.SENGO2_WEIGHT)
            .appendField(new Blockly.FieldNumber(3, 0, 9999, 1), 'w')
            .appendField(Blockly.Msg.SENGO2_HEIGHT)
            .appendField(new Blockly.FieldNumber(4, 0, 9999, 1), 'h')
            .appendField(Blockly.Msg.SENGO2_COLOR)
            .appendField(
                new Blockly.FieldDropdown(sengo2_vision_blod_objs()),
                'lable'
            )
            .appendField(Blockly.Msg.SENGO2_SET_PARAM_GROUP)
            .appendField(new Blockly.FieldNumber(1, 1, 25, 1), 'index')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionSetBlobNum = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO2_SET +
                Blockly.Msg.SENGO2_NAME +
                Blockly.Msg.SENGO2_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO2_VISION_VISIONBLOB,
                        'Sengo2::kVisionBlob',
                    ],
                ]),
                'vision_obj'
            )
        this.appendDummyInput()
            .appendField("  "+ Blockly.Msg.SENGO2_EVERY_CLOLR)
            .appendField(new Blockly.FieldNumber(1, 1, 5, 1), 'mode')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setInputsInline(true)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionSetLineNum = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO2_SET +
                Blockly.Msg.SENGO2_NAME +
                Blockly.Msg.SENGO2_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO2_VISION_VISIONLINE,
                        'Sengo2::kVisionLine',
                    ],
                ]),
                'vision_obj'
            )
        this.appendDummyInput()
            .appendField("  "+ Blockly.Msg.SENGO2_VISION_MAX_RESULT)
            .appendField(new Blockly.FieldNumber(1, 1, 5, 1), 'mode')
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setInputsInline(true)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionSetAprilTagMode = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO2_SET +
                Blockly.Msg.SENGO2_NAME +
                Blockly.Msg.SENGO2_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO2_VISION_VISIONAPRILTAG,
                        'Sengo2::kVisionAprilTag',
                    ],
                ]),
                'vision_obj'
            )
        this.appendDummyInput()
            .appendField("  "+ Blockly.Msg.SENGO2_VISION_TAG_CODE)
            .appendField(
                new Blockly.FieldDropdown([
                    ["16H5",'Sengo2::kVisionModeFamily16H5'],
                    ["25H9",'Sengo2::kVisionModeFamily25H9'],
                    ["36H11",'Sengo2::kVisionModeFamily36H11'],
                ]),
                'mode'
            )
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setInputsInline(true)
        this.setColour('#EF5411')
    },
}


export const Sengo2VisionSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO2_SET +
                Blockly.Msg.SENGO2_NAME +
                Blockly.Msg.SENGO2_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown(sengo2_vision_custom()),
                'vision_obj'
            )
            .appendField("  ")
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO2_SAVE_DATA,
                        '100',
                    ],
                    [
                        Blockly.Msg.SENGO2_DEL_DATA,
                        '0',
                    ],
                ]),
                'lable'
            )
            .appendField(
                Blockly.Msg.SENGO2_SET_ID
            )
        this.appendValueInput('index').setCheck([Number])
        this.setInputsInline(true)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour('#EF5411')
    },
}

export const Sengo2VisionDetectedCount = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                Blockly.Msg.SENGO2_NAME + Blockly.Msg.SENGO2_VISION_EN
            )
            .appendField(
                new Blockly.FieldDropdown(sengo2_vision_objs()),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO2_DETECTED_NUMBER)
        this.setInputsInline(true)
        this.setOutput(true, null)
        this.setColour('#EAA20A')
    },
}

export const Sengo2VisionObjColor = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO2_VISION_VISIONCOLOR, 'Sengo2::kVisionColor'],
        ]

        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_color_objs()),
                'vision_res_obj'
            )
        this.setOutput(true, [Array])
        this.setInputsInline(true)
        this.setColour('#EAA20A')
        this.setMovable(false)
        this.setDeletable(false)
    },
}

export const Sengo2VisionObjLine = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO2_VISION_VISIONLINE, 'Sengo2::kVisionLine'],
        ]

        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_line_objs()),
                'vision_res_obj'
            )
        this.setOutput(true, [Array])
        this.setInputsInline(true)
        this.setColour('#EAA20A')
        this.setMovable(false)
        this.setDeletable(false)
    },
}

export const Sengo2VisionObjQr = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO2_VISION_VISIONQRCODE, 'Sengo2::kVisionQrCode'],
        ]

        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_qr_objs),
                'vision_res_obj'
            )
        this.setOutput(true, [Array])
        this.setInputsInline(true)
        this.setColour('#EAA20A')
        this.setMovable(false)
        this.setDeletable(false)
    },
}

export const Sengo2VisionObj = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO2_VISION_VISIONBLOB, 'Sengo2::kVisionBlob'],
            [
                Blockly.Msg.SENGO2_VISION_VISIONAPRILTAG,
                'Sengo2::kVisionAprilTag',
            ],
            [
                Blockly.Msg.SENGO2_VISION_VISIONLEARNING,
                'Sengo2::kVisionLearning',
            ],
            [Blockly.Msg.SENGO2_VISION_VISIONCARD, 'Sengo2::kVisionCard'],
            [Blockly.Msg.SENGO2_VISION_VISIONFACE, 'Sengo2::kVisionFace'],
            [
                Blockly.Msg.SENGO2_VISION_VISION20CLASSES,
                'Sengo2::kVision20Classes',
            ],
            [
                Blockly.Msg.SENGO2_VISION_VISIONMOTIONDETECT,
                'Sengo2::kVisionMotionDetect',
            ],
        ]

        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_res_objs()),
                'vision_res_obj'
            )
        this.setOutput(true, [Array])
        this.setInputsInline(true)
        this.setColour('#EAA20A')
        this.setMovable(false)
        this.setDeletable(false)
    },
}

export const Sengo2VisionCustom = {
    init: function () {
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown(sengo2_vision_custom()),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_custom_objs()),
                'vision_res_obj'
            )
        this.setOutput(true, [Array])
        this.setInputsInline(true)
        this.setColour('#EAA20A')
        this.setMovable(false)
        this.setDeletable(false)
    },
}

export const Sengo2GetValue = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_NAME)
        this.appendValueInput('sentry_value_obj').setCheck([Array])
        this.appendValueInput('index')
            .setCheck([Number])
            .appendField(Blockly.Msg.SENGO2_VISION_RESULT)
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_VISION_RESULT_2)
        this.setInputsInline(true)
        this.setOutput(true, Number)
        this.setColour('#EAA20A')
        this.setTooltip(Blockly.Msg.SENGO2_HELP_GET_VISION_VALUE)
    },
}

export const Sengo2GetQrValue = {
    init: function () {
        var _vision_objs = [
            [Blockly.Msg.SENGO2_VISION_VISIONQRCODE, 'Sengo2::kVisionQrCode'],
        ]
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENGO2_NAME)
            .appendField(Blockly.Msg.SENGO2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
            .appendField(Blockly.Msg.SENGO2_GET_QRCODEVALUE)
        this.setInputsInline(true)
        this.setOutput(true, String)
        this.setColour('#EAA20A')
    },
}

export const Sengo2VisionColor = {
    init: function () {
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO2_VISION_VISIONCOLOR,
                        'Sengo2::kVisionColor',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO2_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo2::kVisionBlob']
                ),
                'vision_card_obj'
            )
        this.setOutput(true, [Array])
        this.setInputsInline(true)
        this.setColour('#EAA20A')
        this.setMovable(false)
        this.setDeletable(false)
    },
}

export const Sengo2VisionCardBlob = {
    init: function () {
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO2_VISION_VISIONBLOB,
                        'Sengo2::kVisionBlob',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO2_VISION_DETECTED)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo2::kVisionBlob']
                ),
                'vision_card_obj'
            )
            .appendField(Blockly.Msg.SENGO2_VISION_BLOCK)
        this.setOutput(true, [Array])
        this.setInputsInline(true)
        this.setColour('#EAA20A')
        this.setMovable(false)
        this.setDeletable(false)
    },
}

export const Sengo2VisionCard = {
    init: function () {
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO2_VISION_VISIONCARD,
                        'Sengo2::kVisionCard',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO2_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo2::kVisionCard']
                ),
                'vision_card_obj'
            )
        this.setOutput(true, [Array])
        this.setInputsInline(true)
        this.setColour('#EAA20A')
        this.setMovable(false)
        this.setDeletable(false)
    },
}

export const Sengo2VisionCard20Classes = {
    init: function () {
        this.appendDummyInput('VisionValue')
            .appendField(Blockly.Msg.SENGO2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        Blockly.Msg.SENGO2_VISION_VISION20CLASSES,
                        'Sengo2::kVision20Classes',
                    ],
                ]),
                'vision_obj'
            )
            .appendField(Blockly.Msg.SENGO2_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()['Sengo2::kVision20Classes']
                ),
                'vision_card_obj'
            )
        this.setOutput(true, [Array])
        this.setInputsInline(true)
        this.setColour('#EAA20A')
        this.setMovable(false)
        this.setDeletable(false)
    },
}

export const Sengo2VisionDetected = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.SENGO2_NAME)
        this.appendValueInput('sentry_detected_obj').setCheck([Array])
        this.appendValueInput('index')
            .setCheck([Number])
            .appendField(Blockly.Msg.SENGO2_VISION_RESULT_1)
        this.appendDummyInput('VisionDetected')
        this.setInputsInline(true)
        this.setOutput(true, Boolean)
        this.setColour('#EAA20A')
        this.setTooltip(Blockly.Msg.SENGO2_HELP_DETECTED_VISION_VALUE)
    },
}
