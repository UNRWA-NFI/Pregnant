document.getElementById('lastUpdateTime').innerHTML = lastUpdateTime
document.getElementById('lastUpdateDate').innerHTML = lastUpdateDate
function search() {
    let idNumber = parseInt(document.getElementById('id_number').value)
    let resultNo = document.getElementById('no')
    let resultYes = document.getElementById('yes')
    let idDisplay = document.getElementById('id_display')
    let pactype = document.getElementById('pactype')
    resultNo.style.display = "none"
    resultYes.style.display = "none"
    if (idNumber.toString().length === 9) {
        idCheck = id1.get(idNumber)
        if (idCheck === undefined) {
            resultNo.style.display = "inline"
        } else {
            idDisplay.innerHTML = idNumber
            switch (idCheck) {
                case 1:
                    pactype.innerHTML = 'استفدت من الطرد في وقت سابق'
                    break;
                case 2:
                    pactype.innerHTML = 'تم اعتماد بياناتك سيتم التواصل معكم فور توفر الطرد'
                    break;
                case 3:
                    pactype.innerHTML = 'للاسف لا تستطيع الاستفادة من الطرد'
                    break;
                case 4:
                    pactype.innerHTML = 'البيانات المقدمة لا تثبت أسبوع الحمل أو اخر تاريخ متوقع للولادة الرجاء اعادة تقديم بياناتك مع التأكد من البيانات المطلوبة'
                    break;
            }
            resultYes.style.display = "inline"
        }
    } else {
        window.alert("رقم هوية خطأ")
    }
}