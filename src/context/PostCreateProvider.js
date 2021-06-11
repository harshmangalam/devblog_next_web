import { gql, useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const cloudinaryURL =
  "https://api.cloudinary.com/v1_1/officialharsh/image/upload";
const Context = createContext();

const CREATE_POST_MUTATION = gql`
  mutation CreatePost(
    $title: String!
    $tags: [ID]
    $content: String!
    $poster: String
    $posterPublicId: String
  ) {
    createPost(
      postInput: {
        title: $title
        tags: $tags
        content: $content
        poster: $poster
        posterPublicId: $posterPublicId
      }
    ) {
      id
    }
  }
`;

export const PostCreateProvider = ({ children }) => {
  const [createPost, { data: postData, error, loading: createPostLoading }] =
    useMutation(CREATE_POST_MUTATION);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [posterPublicId, setPosterPublicId] = useState("");
  const [loadingPoster, setLoadingPoster] = useState(false);
  const [tags, setTags] = useState([]);

  const router = useRouter();

  const toast = useToast();
  const toastIdRef = useRef();

  useEffect(() => {
    if (createPostLoading) {
      toastIdRef.current = toast({
        title: "Creating...",
        description: "Post creating on progress....",
      });
    }
    if (!createPostLoading && toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }, [createPostLoading]);

  useEffect(() => {
    if (postData) {
      toast({
        title: "Created",
        status: "success",
        description: "Post Created",
      });

      console.log(postData);
    }
  }, [postData]);
  function onContentChange(e) {
    setContent(e.target.value);
  }

  function onTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleTagChange(e) {
    const isChecked = e.target.checked;
    const name = e.target.name;
    const id = e.target.value;

    if (isChecked) {
      setTags([...tags, { id, name }]);
    }

    if (!isChecked) {
      const filterTags = tags.filter((t) => t.id !== id);
      setTags(filterTags);
    }
  }

  async function onPosterChange(e) {
    try {
      const file = e.target.files[0];
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "devblog");
      setLoadingPoster(true);
      const res = await axios.post(cloudinaryURL, data);
      setPosterPublicId(res.data.public_id);
      setPoster(res.data.secure_url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPoster(false);
    }
  }

  async function handleRemovePoster() {
    try {
      setLoadingPoster(true);
      const res = await axios.get(`/cloudinary/delete_image/${posterPublicId}`);

      if (res.data.success) {
        toast({
          title: "Poster",
          description: "Poster removed successfully",
          duration: 3000,
          status: "success",
        });
        setPoster("");
        return;
      } else {
        toast({
          title: "Error",
          description: "Error while removing poster",
          duration: 3000,
          status: "error",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPoster(false);
    }
  }

  function submitPost() {
    const tagsArr = tags.map((tag) => tag.id);

    const postData = {
      title,
      tags: tagsArr,
      content,
      poster,
      posterPublicId,
    };

    createPost({
      variables: postData,
    });

    router.push("/");
  }

  return (
    <Context.Provider
      value={{
        content,
        onContentChange,
        tags,
        handleTagChange,
        title,
        onTitleChange,
        poster,
        loadingPoster,
        onPosterChange,
        handleRemovePoster,
        submitPost,

        createPostLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCreatePost = () => useContext(Context);
