export const send_prj_name = 'SEND_PRJ_NAME';

let nextPrjName = 0;

export function sendPrjName(text) {
    return {
        type: send_prj_name,
        id: nextPrjName++,
        text
    }
}