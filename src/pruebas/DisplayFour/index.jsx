import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCommentsList } from '../../../state/features/comments/commentsSlice';
import Cards from '../../../components/Card/CardComments';
import { PetsNotFound } from '../../../components/PetsNotFound';

export const DisplayFour = () => {
  const dispatch = useDispatch();
  const commentsList = useSelector((state) => state.list);
  const top = commentsList.list;
  console.log("este es un fallo ",top)

  useEffect(() => {
    dispatch(getCommentsList()); 
  }, [dispatch]);
  return (
    <div className='w-full h-screen bg-[#FFFEFD] flex flex-col items-center space-y-3 py-2'>
      <p className='text-[#7C58D3] font-bold text-[1.2rem] font-[Nunito]'>Nuestras opiniones</p>
      <h1 className=' text-[3rem] font-[Nunito]'>Lo que dice la gente</h1>
      <span> Estos son los comentarios que recibimos de la gente que adopto nuestros amigos peludos </span>
      <div>
        {
          top.length
            ? <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 w-full gap-x-[5rem]'>
              {
              top.map(t => (
                <Link key={t.id} to={`/detalles/${t._id}`}>
                  <Cards
                    idPet={t.idPet}
                    idUser={t.idUser}
                    stars={t.stars}
                    size={t.comments}
                    image={t.image}
                  />
                </Link>
              ))
            } </div>
            : <PetsNotFound />
        }

      </div>
      <Link to='/listado'>
        <button className='w-44 h-14 bg-[#7C58D3] text-[#FFFFFF] rounded-md hover:bg-[#5930b9] font-bold transition-colors duration-500'>Ver más</button>
      </Link>
    </div>
  );
};
