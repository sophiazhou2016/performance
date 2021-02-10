interface Radio {
    switchRadio(trigger: boolean): void;
}

interface Battery {
    checkBatteryStatus(): void;
}

interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void;
}

class Car implements Radio {
    switchRadio(trigger: boolean) {

    }
}

class CellPhone implements RadioWithBattery {
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() {

    }
}


// class CellPhone implements Radio, Battery {
//     switchRadio(trigger: boolean) {

//     }
//     checkBatteryStatus() {

//     }
// }