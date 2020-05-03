let Customer = function () {
    this.setName = function (name) {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }
    this.setCmnd = function (cmnd) {
        this.cmnd = cmnd;
    }
    this.getCmnd = function () {
        return this.cmnd;
    }
    this.setBirthday = function (birthday) {
        this.birthday = birthday;
    }
    this.getBirthday = function () {
        return this.birthday;
    }
    this.setEmail = function (email) {
        this.email = email;
    }
    this.getEmail = function () {
        return this.email;
    }
    this.setAddress = function (address) {
        this.address = address;
    }
    this.getAddress = function () {
        return this.address;
    }
    this.setTypesevice = function (typesevice) {
        this.typesevice = typesevice;
    }
    this.getTypesevice = function () {
        return this.typesevice;
    }
    this.setTyperoom = function (typeroom) {
        this.typeroom = typeroom;
    }
    this.getTyperoom = function () {
        return this.typeroom;
    }
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    }
    this.getTypeCustomer = function () {
        return this.typeCustomer;
    }
    this.setQuantityIncluded = function (quantityIncluded) {
        this.quantityIncluded = quantityIncluded;
    }
    this.getQuantityIncluded = function () {
        return this.quantityIncluded;
    }
    this.setDiscount = function (discount) {
        this.discount = discount;
    }
    this.getDiscount = function () {
        return this.discount;
    }
    this.setRenday = function (renday) {
        this.renday = renday;
    }
    this.getRenday = function () {
        return this.renday;
    }
    this.totalpay = function () {
        let money = 0;
        if (this.getTypesevice() === "villa") {
            money = 500;
        } else if (this.getTypesevice() === "house") {
            money = 300;

        } else if (this.getTypesevice() === "room") {
            money = 200;
        }
        return this.getRenday()*money*(1-this.getDiscount()/100);
    }


}