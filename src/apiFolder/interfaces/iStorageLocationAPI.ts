// Generated by https://quicktype.io

export interface iStorageLocationAPI {
    id?:              number;
    aisle?:           string;
    allowDamaged?:    number;
    allowHold?:       number;
    allowQuarantine?: number;
    bay?:             string; 
    caseFlag?:        number;
    category?:        number;
    classification?:  string;
    depth?:           number;
    description?:     string;
    eachFlag?:        number;
    enabled?:         number;
    height?:          number;
    invstatusAction?: number;
    level?:           string;
    modePick?:        number;
    modeProject?:     number;
    modePutawayBulk?: number;
    modePutawayRack?: number;
    modeRecvDock?:    number;
    modeRecvStage?:   number;
    modeShipDock?:    number;
    modeShipStage?:   number;
    numberPallets?:   number;
    palletFlag?:      number;
    pickStyle?:       number;
    rateMultiplier?:  number;
    si?:              string;
    slot?:            string;
    state?:           string;
    storageId?:       string;
    tempMax?:         number;
    tempMin?:         number;
    type?:            number;
    uomAction?:       number;
    velocity0?:       number;
    velocityA?:       number;
    velocityB?:       number;
    velocityC?:       number;
    velocityD?:       number;
    weightMax?:       number;
    width?:           number;
    xspace?:          number;
    yspace?:          number;
    zipEnd?:          string;
    zipStart?:        string;
    zone?:            string;
    zspace?:          number;
    warehouseId?:     number;
    details?:         iDetailsAPI;
    currentCube?:     number;
    lpnCount?:        number;
    vendors?:         iVendorAPI[];
}

export interface iDetailsAPI {
    id?:              number;
    storageId?:       string;
    currentLpns?:     number;
    currentVolume?:   number;
    currentWeight?:   number;
    lpnsRemaining?:   number;
    volumeRemaining?: number;
    weightRemaining?: number;
}

export interface iVendorAPI {
    id?:             number;
    accountid?:      string;
    description?:    string;
    enabled?:        number;
    mcountry?:       string;
    mstate?:         string;
    rateMultiplier?: number;
    scountry?:       string;
    sstate?:         string;
    type?:           number;
}
