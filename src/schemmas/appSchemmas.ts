export interface wayProps {
    way: "left" | "right" | "down"
}

export interface FadeProps {
    children: JSX.Element[] | JSX.Element,
    way: "left" | "right" | "down" | "startDown" | "startLeft",

}
export interface StampProps {
    children: JSX.Element[] | JSX.Element,
    parentStyles: JSX.ElementClass
}
export interface ProjectProps {
    id: number,
    image: string,
    title: String,
    resume: String,
    link?: string | undefined
}
export interface SkillRangeProps {
    id: number,
    skill: String,
    percent: number
}
type Icon = {
    id: number,
    library: String,
    tag: String
}
export type ContactProps = {
    id: number,
    text?: string,
    link?: string,
    icon?: Icon
    hover?: Boolean,
}
export interface EmalProps {
    name: string,
    email: string,
    message: string
}
export type PrincipalSkillsProps = {
    id: number,
    title: string,
    resume: string
}
export interface InitialDataProps {
    principalSkills: PrincipalSkillsProps[],
    social: ContactProps[],
    projects: ProjectProps[],
    skills: SkillRangeProps[]
}