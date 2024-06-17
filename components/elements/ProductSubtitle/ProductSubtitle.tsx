import { useLang } from '@/hooks/useLang'
import styles from '@/styles/product-subtitle/index.module.scss'
import { IProductSubtitleProps } from '@/types/elements'

const ProductSubtitle = ({
  subtitleClassName,
  // subtitleRectClassName,
}: IProductSubtitleProps) => {
  // ? Custom Hooks
  const { lang, translations } = useLang()

  // * Variables
  const descriptionSlicePosition = lang === 'ru' ? 5 : 2

  return (
    <div
      className={`${styles.product_subtitle__subtitle} ${subtitleClassName}`}
    >
      <div
        className={`${styles.product_subtitle__subtitle__rect} ${subtitleClassName}`}
      />
      <span>
        {translations[lang].main_page.hero_description.slice(
          0,
          descriptionSlicePosition
        )}
      </span>
      <br />
      <span>
        {translations[lang].main_page.hero_description.slice(
          descriptionSlicePosition
        )}
      </span>
    </div>
  )
}

export default ProductSubtitle
