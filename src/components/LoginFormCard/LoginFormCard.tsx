import {Button, Card, Checkbox, Select, Space, Text, TextInput} from "@mantine/core";

export default function LoginFormCard() {
    return (
        <div
            style={{width: 450}}
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
                />
                <Space h={'xs'}/>
                <TextInput
                    label={'Email'}
                    placeholder={'Your email'}
                    type={'email'}
                    required
                />
                <Space h={'xs'}/>
                <TextInput
                    label={'Password'}
                    placeholder={'Your password'}
                    type={'password'}
                    required
                />
                <Space h={'xs'}/>
                <TextInput
                    label={'Repeat password'}
                    placeholder={'Repeat your password'}
                    type={'password'}
                    required
                />
                <Space h={'xs'}/>
                <Select
                    style={{width: 100}}
                    label={'Gender'}
                    required
                    defaultValue={'men'}
                    data={[
                        {value: 'men', label: 'Men'},
                        {value: 'female', label: 'Female'},
                        {value: 'other', label: 'Other'}
                    ]}
                />
                <Space h={'xl'}/>
                <Checkbox
                    label={'I agree to sell my privacy'}
                    required
                    color={'teal'}
                />
                <Space h={'xl'}/>
                <Button
                    variant={'gradient'}
                    gradient={{from: 'teal', to: 'lime'}}
                    fullWidth
                    uppercase
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
        </div>
    )

}
