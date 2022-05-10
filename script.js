"use strict";
const billIn = document.getElementById("billinput");
const tipInput = document.getElementById("tipinput");
const peoplenumber = document.getElementById("peoplenumber");
const totalTipAmount = document.getElementById("totaltipamount");
const totalAmount = document.getElementById("totalamount");
const error = document.querySelector(".error");
const resetBtn = document.getElementById("resetbtn");

const tipBtn = document.querySelectorAll(".tipbtn");

totalTipAmount.innerText = "$0.00";
error.classList.add("hidden");

tipBtn.forEach((items) => {
    items.addEventListener("click", function () {
        let btnid = parseFloat(this.id);
        tipInput.value = btnid;
        if (peoplenumber.value > 0 && billIn.value > 0 && tipInput.value > 0) {
            error.classList.add("hidden");
            let billInputvalue = parseFloat(billIn.value);
            let tipinputValue = (tipInput.value * billInputvalue) / 100;
            let NumberOfPeople = parseFloat(peoplenumber.value);
            let tipAmountPerPerson = tipinputValue / NumberOfPeople;
            let tipperperson = `$${tipAmountPerPerson.toFixed(2)}`;
            totalTipAmount.innerText = tipperperson;
            let totalbill = (tipinputValue + billInputvalue) / NumberOfPeople;
            totalAmount.innerText = `$${totalbill.toFixed(2)}`;
        }

        peoplenumber.addEventListener("input", function () {
            if (peoplenumber.value == 0) {
                error.classList.remove("hidden");
                totalTipAmount.innerText = "$0.00";
                totalAmount.innerText = "$0.00";
            }
        });
    });
});

peoplenumber.addEventListener("input", function () {
    if (peoplenumber.value > 0 && billIn.value > 0 && tipInput.value > 0) {
        error.classList.add("hidden");
        let billInputvalue = parseFloat(billIn.value);
        let tipinputValue = (tipInput.value * billInputvalue) / 100;
        let NumberOfPeople = parseFloat(peoplenumber.value);
        let tipAmountPerPerson = tipinputValue / NumberOfPeople;
        let tipperperson = `$${tipAmountPerPerson.toFixed(2)}`;
        totalTipAmount.innerText = tipperperson;
        let totalbill = (tipinputValue + billInputvalue) / NumberOfPeople;
        totalAmount.innerText = `$${totalbill.toFixed(2)}`;
    } else if (peoplenumber.value == 0) {
        error.classList.remove("hidden");
        totalTipAmount.innerText = "$0.00";
        totalAmount.innerText = "$0.00";
    }
});

billIn.addEventListener("input", function () {
    if (peoplenumber.value > 0 && billIn.value > 0 && tipInput.value > 0) {
        let billInputvalue = parseFloat(billIn.value);
        let tipinputValue = (tipInput.value * billInputvalue) / 100;
        let NumberOfPeople = parseFloat(peoplenumber.value);
        let tipAmountPerPerson = tipinputValue / NumberOfPeople;
        totalTipAmount.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
        let totalbill = (tipinputValue + billInputvalue) / NumberOfPeople;
        totalAmount.innerText = `$${totalbill.toFixed(2)}`;
        error.classList.add("hidden");
    } else if (peoplenumber.value == 0) {
        totalTipAmount.innerText = "$0.00";
        totalAmount.innerText = "$0.00";
    }
});

tipInput.addEventListener("input", function () {
    if (peoplenumber.value > 0 && billIn.value > 0 && tipInput.value > 0) {
        let billInputvalue = parseFloat(billIn.value);
        let tipinputValue = (tipInput.value * billInputvalue) / 100;
        let NumberOfPeople = parseFloat(peoplenumber.value);
        let tipAmountPerPerson = tipinputValue / NumberOfPeople;
        totalTipAmount.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
        let totalbill = (tipinputValue + billInputvalue) / NumberOfPeople;
        totalAmount.innerText = `$${totalbill.toFixed(2)}`;
        error.classList.add("hidden");
    } else if (peoplenumber.value == 0) {
        totalTipAmount.innerText = "$0.00";
        totalAmount.innerText = "$0.00";
    }
});

resetBtn.addEventListener("click", function () {
    billIn.value = "";
    tipInput.value = "";
    peoplenumber.value = "";
    totalTipAmount.innerText = "$0.00";
    totalAmount.innerText = "$0.00";
    error.classList.add("hidden");
});
