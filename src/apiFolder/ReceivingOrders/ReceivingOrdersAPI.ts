// Generated by https://quicktype.io

export interface ReceivingOrdersAPI {
    id?:               number;
    createdOnDt?:      string;
    docNumber?:        string;
    //expectedTransTs?:  string;
    //h?:                string;
    invoicetoId?:      number;
    orderNumber?:      string;
    poNumber?:         string;
    priority?:         number;
    rateMultiplier?:   number;
    specialInstructions?:  string,//si?:               string;
    status?:           number;
    style?:            number;
    //taskId?:           number;
    type?:             number;
    equipment?:        string, //var0?:             string;
    Seals?:            string, //var1?
    version?:          string;
    vendorId?:         number;
    createdById?:      number;
    warehouseId?:      number;
    source?:           string;
    userDefinedField?: UserDefinedField;
    //preDefsValues?:    PreDefsValues;
    createdBy?:        {}, //CreatedBy;
    appointment?:      Appointment;
    sourceData?:       string;
    chargeCodes?:      any[];
    vendor?:           Vendor;
    files?:            any[];
    editableEvents?:   any[];
    events?:           {}, //Event[];
    notes?:            any[];
    signature?:        Signature;
    task?:             Task;
    itemEntries?:      ItemEntry[];
    lpns?:             any[];
    crossDockLines?:   any[];
}

export interface Appointment {
    assignments: any[];
    vendor:      ReceivingOrdersCarrierAPI;
    carrier:     ReceivingOrdersCarrierAPI;
}

export interface ReceivingOrdersCarrierAPI {
    attributes:            any[];
    chargeCodes:           any[];
    notes:                 any[];
    scripts:               any[];
    itemStorageCharges:    any[];
    autoChargeCodes:       any[];
    shippingPreDefTitles:  Signature;
    receivingPreDefTitles: Signature;
    workOrderPreDefTitles: Signature;
    shipmentPreDefTitles:  Signature;
    defaultBillings:       any[];
    events:                any[];
    nmfcCodes:             any[];
    scriptMaps:            any[];
    attributeMaps:         any[];
    monthlyBillings:       any[];
    carrierFees:           any[];
    files:                 any[];
    rateMultipliers:       any[];
    serviceLanes:          any[];
    carrierRoutes:         any[];
    proSettings:           any[];
}

export interface Signature {
}

export interface CreatedBy {
    id?:                  number;
    description?:         string;
    dialect?:             number;
    email?:               string;
    enabled?:             number;
    lastPwdchangeDt?:     string;
    loginErrors?:         number;
    status?:              number;
    type?:                number;
    userid?:              number;
    userGrpId?:           number;
    // group?:               Group;
    group?:               {},
    warehouses?:          Warehouse[];
    attributes?:          CreatedByAttribute[];
    businessPartners?:    BusinessPartner[];
    forcedPasswordReset?: number;
}

export interface CreatedByAttribute {
    id:        number;
    userId:    number;
    attribute: number;
    ival:      number;
    sval:      string;
    dval:      number;
}

export interface BusinessPartner {
    id:     number;
    userId: number;
    bpId:   number;
}

// export enum Description {
//     Admin = "ADMIN",
//     Adminqa1TrialWdgcorpCOM = "adminqa1-trial@wdgcorp.com",
//     Adminqa2TrialWdgcorpCOM = "adminqa2-trial@wdgcorp.com",
//     Adminrf1TrialWdgcorpCOM = "adminrf1-trial@wdgcorp.com",
//     SkhusairiTrialWdgcorpCOM = "skhusairi-trial@wdgcorp.com",
//     TestMailCOM = "test@mail.com",
// }

export interface Group {
    id:                 number;
    category:           number;
    guest:              number;
    enabled:            number;
    description:        string;
    events:             Event[];
    securityAttributes: SecurityAttribute[];
}

export interface Event {
    id:             number;
    eventType:      number;
    eventClass:     number;
    eventClassType: number;
    userid:         number;
    dtEnd:          string;
    sval:           string;
}

export interface SecurityAttribute {
    id:        number;
    attribute: number;
    ival:      number;
    grpId:     number;
}

export interface Warehouse {
    id:          number;
    userId:      number;
    warehouseId: number;
}

export interface ItemEntry {
    id:               number;
    orderId:          number;
    type:             number;
    itemId:           number;
    uomItemType:      number;
    uomHandlingType:  number;
    userId:           number;
    status:           number;
    qty:              number;
    dt:               string;
    lot:              string;
    subLot:           string;
    actualWeight:     number;
    validated:        number;
    containerid:      string;
    qtyPlanned:       number;
    cntrl:            string;
    asnValues:        AsnValues;
    tagData:          any[];
    inventory:        any[];
    item:             Item;
    storage:          Storage;
    exception:        Signature;
    inventoryTagData: any[];
}

export interface AsnValues {
    id:          number;
    itemEntryId: number;
    orderId:     number;
    tagData:     number;
}

export interface Item {
    id:                         number;
    cartonizationGroup:         Signature;
    enabled:                    number;
    type:                       number;
    category:                   number;
    itemCode:                   string;
    description:                string;
    valuePerEach:               number;
    pickStyle:                  number;
    pickOffset:                 number;
    cycleCountEnable:           number;
    cycleCountStyle:            number;
    orderFreq:                  number;
    trackingStyleEnable:        number;
    trackingStyleSn:            number;
    si:                         string;
    tempRangeMax:               number;
    tempRangeMin:               number;
    trackAdvFv0:                number;
    trackAdvFv1:                number;
    trackAdvFv2:                number;
    trackAdvFv3:                number;
    trackAdvFv4:                number;
    trackAdvFv5:                number;
    trackAdvFv6:                number;
    trackAdvFv7:                number;
    trackAdvFv8:                number;
    trackAdvFv9:                number;
    trackAdvFv0ModeShip:        number;
    trackAdvFv1ModeShip:        number;
    trackAdvFv2ModeShip:        number;
    trackAdvFv3ModeShip:        number;
    trackAdvFv4ModeShip:        number;
    trackAdvFv5ModeShip:        number;
    trackAdvFv6ModeShip:        number;
    trackAdvFv7ModeShip:        number;
    trackAdvFv8ModeShip:        number;
    trackAdvFv9ModeShip:        number;
    trackAdvFv0ModeRecv:        number;
    trackAdvFv1ModeRecv:        number;
    trackAdvFv2ModeRecv:        number;
    trackAdvFv3ModeRecv:        number;
    trackAdvFv4ModeRecv:        number;
    trackAdvFv5ModeRecv:        number;
    trackAdvFv6ModeRecv:        number;
    trackAdvFv7ModeRecv:        number;
    trackAdvFv8ModeRecv:        number;
    trackAdvFv9ModeRecv:        number;
    trackingStyleContainer:     number;
    trackingStyleExpdate:       number;
    trackingStyleLot:           number;
    trackingStyleQuaranReldate: number;
    trackingStyleSnReverse:     number;
    trackingStyleUserdef:       number;
    trackingStyleWeight:        number;
    vendorId:                   number;
    uomId:                      number;
    uom:                        Uom;
    kitSubItems:                any[];
    upcs:                       any[];
    itemWarehouses:             any[];
    replenishmentPlans:         any[];
    userDefined:                UserDefined;
    buildable:                  number;
    file:                       Signature;
}

export interface Uom {
    id:                   number;
    caseAbbrev:           string;
    caseDepth:            number;
    caseDescription:      string;
    caseHasInnerpack:     number;
    caseHeight:           number;
    caseMaxStackWeight:   number;
    caseTare:             number;
    caseWeight:           number;
    caseWidth:            number;
    defaultOuom:          number;
    eaAbbrev:             string;
    eaCaseQty:            number;
    eaDepth:              number;
    eaDescription:        string;
    eaHeight:             number;
    eaTare:               number;
    eaWeight:             number;
    eaWidth:              number;
    ipAbbrev:             string;
    ipCaseQty:            number;
    ipDepth:              number;
    ipDescription:        string;
    ipHeight:             number;
    ipTare:               number;
    ipWeight:             number;
    ipWidth:              number;
    itemId:               number;
    palletAbbrev:         string;
    palletDepth:          number;
    palletDescription:    string;
    palletHeight:         number;
    palletHigh:           number;
    palletMaxStackWeight: number;
    palletTare:           number;
    palletTie:            number;
    palletWeight:         number;
    palletWidth:          number;
    si:                   string;
    style:                number;
    vendorId:             number;
}

export interface UserDefined {
    id:     number;
    itemId: number;
    ft0:    string;
    fv0:    string;
    ft1:    string;
    fv1:    string;
    ft2:    string;
    fv2:    string;
    ft3:    string;
    fv3:    string;
    ft4:    string;
    fv4:    string;
    ft5:    string;
    fv5:    string;
    ft6:    string;
    fv6:    string;
    ft7:    string;
    fv7:    string;
    ft8:    string;
    fv8:    string;
    ft9:    string;
    fv9:    string;
}

export interface Storage {
    details:     Signature;
    currentCube: number;
    lpnCount:    number;
    vendors:     any[];
}

export interface PreDefsValues {
    id:      number;
    orderId: number;
    fv0:     string;
    fv1:     string;
    fv2:     string;
    fv3:     string;
    fv4:     string;
    fv5:     string;
    fv6:     string;
    fv7:     string;
    fv8:     string;
    fv9:     string;
}

export interface Task {
    id:              number;
    warehouseId:     number;
    type:            number;
    status:          number;
    state:           number;
    priority:        number;
    taskNumber:      string;
    description:     string;
    createdById:     number;
    createdOnDt:     string;
    expectedTransTs: string;
}

export interface UserDefinedField {
    id:      number;
    orderId: number;
}

export interface Vendor {
    id:                    number;
    accountid:             string;
    bonded:                number;
    description:           string;
    enabled:               number;
    mcountry:              string;
    mstate:                string;
    rateMultiplier:        number;
    scountry:              string;
    sstate:                string;
    type:                  number;
    attributes:            VendorAttribute[];
    chargeCodes:           ChargeCode[];
    notes:                 any[];
    scripts:               any[];
    itemStorageCharges:    ItemStorageCharge[];
    autoChargeCodes:       AutoChargeCode[];
    shippingPreDefTitles:  PreDefTitles;
    receivingPreDefTitles: PreDefTitles;
    workOrderPreDefTitles: PreDefTitles;
    shipmentPreDefTitles:  ShipmentPreDefTitles;
    defaultBillings:       DefaultBilling[];
    events:                Event[];
    nmfcCodes:             any[];
    scriptMaps:            any[];
    attributeMaps:         any[];
    monthlyBillings:       any[];
    carrierFees:           any[];
    files:                 any[];
    rateMultipliers:       any[];
    serviceLanes:          any[];
    carrierRoutes:         any[];
    proSettings:           any[];
}

export interface VendorAttribute {
    id:                number;
    businessPartnerId: number;
    attribute:         number;
    ival:              number;
    dval:              number;
    sval:              string;
    aval:              any[];
}

export interface AutoChargeCode {
    id:                number;
    type:              number;
    businessPartnerId: number;
    chargeCodeId:      number;
}

export interface ChargeCode {
    id:                number;
    code:              string;
    type:              number;
    businessPartnerId: number;
    description:       string;
    rate:              number;
    visibleOnScanner:  number;
    minCharge:         number;
    maxCharge:         number;
    autoApply:         number;
    ranges:            Range[];
    tieredBilling:     boolean;
    glCode?:           string;
    rateAssoc?:        number;
    valueFrom?:        number;
    valueTo?:          number;
}

export interface Range {
    id:        number;
    valueFrom: number;
    valueTo:   number;
    rate:      number;
}

export interface DefaultBilling {
    id:          number;
    bpId:        number;
    uomType:     number;
    invoiceType: number;
    chargeRefId: number;
    chargeType:  number;
    itemType:    number;
}

export interface ItemStorageCharge {
    id:                   number;
    vendorId:             number;
    description:          string;
    type:                 number;
    billingScheduleType?: number;
    billingSchedules:     BillingSchedule[];
    rateAssoc?:           number;
    rate?:                number;
}

export interface BillingSchedule {
    id:      number;
    rate:    number;
    valFrom: number;
    valTo:   number;
}

export interface PreDefTitles {
    id:       number;
    vendorId: number;
    type:     number;
}

export interface ShipmentPreDefTitles {
    id:       number;
    vendorId: number;
}
