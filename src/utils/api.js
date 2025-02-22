
export async function postFeelingInfo(inputValue){
    const res = await fetch("http://127.0.0.1:5000/classify", {
    method:"post",
    headers: {
        "Content-Type": "application/json"
    },
    //mode: 'no-cors',  
    body: JSON.stringify({text: inputValue })})
    if(!res.ok){
        throw {
            message: "Failed",
            statusText: res.statusText,
            staus: res.status
        }
    }
    const data = await res.json()
    return data;
}