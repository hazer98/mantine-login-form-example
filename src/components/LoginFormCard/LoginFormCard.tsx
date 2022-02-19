import {Button, Card, Checkbox, Select, Space, Text, TextInput} from "@mantine/core";
import {useForm} from "@mantine/hooks";
import {useState} from "react";

interface FormProps {
    fullName: string;
    email: string;
    password: string;
    gender: 'male' | 'female' | 'other';
    termsOfService: boolean;
}

export default function LoginFormCard() {
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');

    const form = useForm<FormProps>({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            gender: 'male',
            termsOfService: false,
        },

        validationRules: {
            email: (value) => /^\S+@\S+$/.test(value),
        },
    });

    return (
        <form
            style={{width: 450}}
            onSubmit={form.onSubmit((values: FormProps) => console.log(values))}
        >
            <Card
                padding={'xl'}
                shadow={'xl'}
            >
                <Text
                    size={'xl'}
                    transform={'uppercase'}
                    weight={700}
                    align={'center'}
                >
                    create account
                </Text>
                <Space h={'xl'}/>
                <TextInput
                    label={'Full name'}
                    placeholder={'Your name'}
                    required
                    {...form.getInputProps('fullName')}
                />
                <Space h={'xs'}/>
                <TextInput
                    label={'Email'}
                    placeholder={'Your email'}
                    type={'email'}
                    required
                    {...form.getInputProps('email')}
                />
                <Space h={'xs'}/>
                <TextInput
                    label={'Password'}
                    placeholder={'Your password'}
                    type={'password'}
                    required
                    {...form.getInputProps('password')}
                />
                <Space h={'xs'}/>
                <TextInput
                    value={passwordRepeat}
                    onChange={(event) => setPasswordRepeat(event.currentTarget.value)}
                    label={'Repeat password'}
                    placeholder={'Repeat your password'}
                    type={'password'}
                    error={!(form.getInputProps('password').value === passwordRepeat)}
                    required
                />
                <Space h={'xs'}/>
                <Select
                    style={{width: 100}}
                    label={'Gender'}
                    required
                    defaultValue={'male'}
                    data={[
                        {value: 'male', label: 'Male'},
                        {value: 'female', label: 'Female'},
                        {value: 'other', label: 'Other'}
                    ]}
                    {...form.getInputProps('gender')}
                />
                <Space h={'xl'}/>
                <Checkbox
                    label={'I agree to sell my privacy'}
                    required
                    color={'teal'}
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                />
                <Space h={'xl'}/>
                <Button
                    variant={'gradient'}
                    gradient={{from: 'teal', to: 'lime'}}
                    fullWidth
                    uppercase
                    type={'submit'}
                >
                    Sign up
                </Button>
                <Space h={'xl'}/>
                <Text
                    size={'sm'}
                    align={'center'}
                >
                    <span>Already have an account? </span>
                    <a
                        href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        Login here
                    </a>
                </Text>
            </Card>
        </form>
    )

}
