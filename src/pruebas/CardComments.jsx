import starsIcon from '../../assets/Comments/start.jpg';
import commentsIcon from '../../assets/Comments/comments.png';

const Cards = ({ idPet, idUser, stars, comments, image }) => {

  const starRating = [];
  for (let i = 0; i < stars; i++) {
    starRating.push(
      <img src={starsIcon} key={i} alt='star' className='w-4 h-4' />
    );
  }
  
  return (
    <div className='bg-[#FFFEFD] w-[33rem] relative h-[19rem] flex rounded-lg border-2 border-[#EBE5F7] overflow-hidden'>
      <section className='w-[40%] h-full overflow-hidden'>
        <div className='h-full w-[13rem]'>
          <img className='h-full w-full rounded-l-md object-cover' src={image} alt='Pet Photo' />
        </div>
      </section>

      <section className='w-[60%] h-full px-4 py-5 space-y-3 flex flex-col'>
        <div className='id-pet'>
          <h1 className='text-[0.9rem] font-bold'>ID de mascota</h1>
          <p className='text-[0.9rem]'>{idPet}</p>
        </div>
        <div className='id-user'>
          <h1 className='text-[0.9rem] font-bold'>ID de usuario</h1>
          <p className='text-[0.9rem]'>{idUser}</p>
        </div>

        <div className='flex gap-1 items-center'>
          <img src={starsIcon} alt='stars' className='w-4 h-4' />
          <div className='text-[0.9rem]'>{starRating}</div>
        </div>

        <div className='flex gap-1 items-center'>
          <img src={commentsIcon} alt='comments' className='w-4 h-4' />
          <div className='text-[0.9rem]'>{comments} comentarios</div>
        </div>
      </section>
    </div>
  );
};

export default Cards;

