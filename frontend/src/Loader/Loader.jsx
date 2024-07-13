import style from './Loader.module.css'

const {loader, section_div} = style
export const LoaderComponent = () => {
  return (
    <section className={section_div}>

      <div className={loader}></div>
    </section>
  )
}
