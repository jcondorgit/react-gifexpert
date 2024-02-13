
export const IsLoading = ({ loadingImages }) => {
  return (
    <>
      {
        loadingImages && (<span className="isloading"> <b> ...cargando </b> </span>)
      }
    </>
  )
}

