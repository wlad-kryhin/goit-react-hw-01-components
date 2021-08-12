import PropTypes from 'prop-types';
export default function FriendItem({id,avatar,author,isOnline}){
    return (
        <li class="item" key={id}>
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt={author} width="48" />
  <p class="name">{author}</p>
</li>
    )
}

FriendItem.propTypes ={
    id: PropTypes.number,
    avatar: PropTypes.string,
    author: PropTypes.string
}