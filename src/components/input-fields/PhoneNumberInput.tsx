import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';

// https://react-international-phone.vercel.app/docs/Usage/PhoneInput

export default function PhoneNumberInput({ iname='phone_number' }) {
    const [phone, setPhone] = useState('');

    // style={{ border: '1px solid #123669', borderRadius: 8, padding: 5}}

    return (
        <PhoneInput
            inputProps={{
                id:iname,
                name:iname
            }}
            defaultCountry="ke"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            className="custom-phone-input"
            inputClassName="w-full"
            countrySelectorStyleProps={{
                buttonContentWrapperClassName:'px-5'
            }}
            />
    )
}