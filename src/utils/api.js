
export async function postFeelingInfo(inputValue){
    const res = await fetch("http://localhost:5000/classify", {method:"post", body: JSON.stringify({text: inputValue})})
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