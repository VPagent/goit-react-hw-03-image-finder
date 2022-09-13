import { Component } from 'react';
import Searchbar from './Searchbar';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';

const PRIVATE_KEY = '29321758-e768d1c89c32410537fe23d2a';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export class App extends Component {
  
  state = {
    searchName: '',
    allImg: [],
    page: 1,
    isLoading: false,
    showModal: false,
    currentItem: null
  };
  
  componentDidUpdate(_, prevState){
    const {searchName, page} = this.state
    if(prevState.searchName !== searchName || prevState.page !== page){
      this.fetchApi()
    }
  }

  hadnleSubmitForm = value => {
    this.setState({ searchName: value, allImg:[], page: 1 });
  };

  fetchApi = async () => {
    const { searchName, page } = this.state;
    const link = `?q=${searchName}&page=${page}&key=${PRIVATE_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(link);
      this.setState(state => ({allImg: [...state.allImg, ...response.data.hits], isLoading: false }));
    } catch {alert("Error")}
  };

  handleLoadMore = () => {
    const {page} = this.state
    this.setState({page: page + 1})
  } 

  handleOpenModal = (value) => {
    this.setState({showModal: true, currentItem: value})
    window.addEventListener("keydown" , this.handleKeyDown)
  }

  handleCloseModal = () => {
    this.setState({showModal: false})
    window.removeEventListener("keydown", this.handleKeyDown)
  } 

  handleKeyDown = (event) => {
    if(event.code === "Escape"){
      this.handleCloseModal()
    }
  }

  render() {
    const { allImg, isLoading, currentItem, showModal } = this.state;
    const { hadnleSubmitForm, handleLoadMore, handleOpenModal, handleCloseModal } = this;
    const isAllImg = allImg.length
    return (
      <div>
        <Searchbar onSubmitForm={hadnleSubmitForm} />
        <ImageGallery allImages={allImg} handleOpenModal={handleOpenModal}/>
        {isAllImg && <Button onClickLoad={handleLoadMore}/>}
        {isLoading && <Loader />}
        {showModal && <Modal currentItem={currentItem} handleCloseModal={handleCloseModal}/>}
      </div>
    );
  }
}


