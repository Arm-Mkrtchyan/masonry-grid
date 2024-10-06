import styled from "styled-components";
import { colors } from "@/utils/constants/colors.ts";

interface TextProps {
  color?: string;
  fontSize?: string
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vh;
    height: 100vh;
    padding: 1.2rem
`

export const Text = styled.p<TextProps>`
    margin-top: 1.6rem;
    font-size: ${ (props: TextProps) => props.fontSize ?? '1.6rem' };
    color: ${ (props: TextProps) => props.color ?? colors.textPrimary };
    line-height: 2rem;
    text-align: center;
    font-weight: 600;
    padding: 1.2rem 0;
`


export const Button = styled.span`
    margin-top: 1.6rem;
    font-size: ${ (props: TextProps) => props.fontSize ?? '1.6rem' };
    color: ${ (props: TextProps) => props.color ?? colors.textPrimary };
    line-height: 2rem;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    padding: 1.2rem 0;
`
