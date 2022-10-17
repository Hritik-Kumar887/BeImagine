import React from 'react'

export const ApiCall = () => {
    return fetch(
        `https://script.google.com/macros/s/AKfycbyLQ-2x3Bg7yj_E-B_OmFWNcM_Ek2RbhlJVlbDxKeB_KbuP2YU6YY12_82pg7-eZCLc2w/exec`, {
        method: "GET",
    }
    ).then(response => {
        return response.json();
    }).catch(err => console.log(err))
}

export const ApiCallGender = (gender) => {
    return fetch(
        `https://script.google.com/macros/s/AKfycbyLQ-2x3Bg7yj_E-B_OmFWNcM_Ek2RbhlJVlbDxKeB_KbuP2YU6YY12_82pg7-eZCLc2w/exec?sex=${gender}`, {
        method: "GET",
    }
    ).then(response => {
        return response.json();
    }).catch(err => console.log(err))
}

export const ApiCallDept = (dept) => {
    return fetch(
        `https://script.google.com/macros/s/AKfycbyLQ-2x3Bg7yj_E-B_OmFWNcM_Ek2RbhlJVlbDxKeB_KbuP2YU6YY12_82pg7-eZCLc2w/exec?sex=${dept}`, {
        method: "GET",
    }
    ).then(response => {
        return response.json();
    }).catch(err => console.log(err))
}