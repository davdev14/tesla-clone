import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './sectionHeading.css?inline'

interface SectionHeadingProps {
  mainHeading: string;
  subHeading: string;
  color?: string;
  textDecoration?: string;
}



const SectionHeading = component$<SectionHeadingProps>(({mainHeading, subHeading, color, textDecoration}) => {
  useStylesScoped$(styles)
  return (
    <div class='container'>
      <h1 class='main-heading' style={{color}}>{mainHeading}
      </h1> 
    <a href="/" class='sub-heading' style={{color, textDecoration}}>{subHeading}</a>
    </div>
  )
})
export default SectionHeading