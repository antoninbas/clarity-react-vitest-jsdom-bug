import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CdsButton } from '@cds/react/button';
import { CdsSelect } from '@cds/react/select';
import { CdsFormGroup } from '@cds/react/forms';

type Inputs = {
    field: string
};

function App() {
    function defaultValues(): Partial<Inputs> {
        return {
            field: "V1",
        };
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        defaultValues: defaultValues(),
    });

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log("Form submitted!")
    };

    return (
        <main>
            <div cds-layout="vertical gap:lg">
                <p cds-text="title">Test</p>
                <form onSubmit = {handleSubmit(onSubmit)}>
                    <CdsFormGroup layout="horizontal">
                        <CdsSelect>
                            <label>Field</label>
                            <select {...register("field")}>
                                <option value="V1">V1</option>
                                <option value="V2">V2</option>
                            </select>
                        </CdsSelect>
                        <CdsButton role="button" type="submit">Submit</CdsButton>
                    </CdsFormGroup>
                </form>
            </div>
        </main>
    )
}

export default App
