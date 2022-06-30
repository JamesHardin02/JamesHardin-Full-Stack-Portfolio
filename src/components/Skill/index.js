function Skill({skill}){
  const { alt, image, name } = skill
  return (
  <li>
    <figure className='flex-col-center'>
      <img alt={alt}src={image}></img>
      <figcaption>{name}</figcaption>
    </figure>
  </li>)

}

export default Skill