interface Props {
  /**
  * @description The description of name.
  */
  url?: string;

  primary?: string;
  secondary?: string;

  sections: Section[];
}

export const loader = ({ url, primary, secondary } : Props) => {
  const {dynamicPrimary, dynamicSecondary, account} = fetch(url)

  return {
    theme: {
      primary: primary | dynamicPrimary,
      secondary: secondary | dynamicSecondary,
      account
    }
  }
}

export default function Section({ primary, secondary }: Props) {
  return (
    <>
      <Theme primary={primary} secondary={secondary}/>
      {sections.map(<Section/>)}
    </> 
  )
}