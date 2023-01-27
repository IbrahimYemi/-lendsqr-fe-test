import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type user = {
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    profile: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        avatar: string;
        gender: string;
        bvn: string;
        address: string;
        currency: string
    },
    guarantor: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        gender: string;
        address: string;
    },
    accountBalance: string;
    accountNumber: string;
    socials: {
        facebook: string;
        instagram: string;
        twitter: string;
    },
    education: {
        level: string;
        employmentStatus: string;
        sector: string;
        duration: string;
        officeEmail: string;
        monthlyIncome: string[];
        loanRepayment: string;
    },
    id: string;
}

export interface userState {
    user: user
}

const initialState:userState = {
    user: {
        createdAt: '',
        orgName: '',
        userName: '',
        email: '',
        phoneNumber: '',
        lastActiveDate: '',
        profile: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            avatar: '',
            gender: '',
            bvn: '',
            address: '',
            currency: ''
        },
        guarantor: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            gender: '',
            address: '',
        },
        accountBalance: '',
        accountNumber: '',
        socials: {
            facebook: '',
            instagram: '',
            twitter: '',
        },
        education: {
            level: '',
            employmentStatus: '',
            sector: '',
            duration: '',
            officeEmail: '',
            monthlyIncome: ['', ''],
            loanRepayment: '',
        },
        id: '',
    }
}

export const singleUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<user>) => {
            state.user = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = singleUserSlice.actions

export default singleUserSlice.reducer