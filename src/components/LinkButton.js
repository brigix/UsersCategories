import { Button } from '@chakra-ui/react';

const LinkButton = ({ getCategory, ...props }) => {
  const handleOnClick = e => {
    getCategory(e.target.value);
  };
  return (
    <Button
      value={props.value}
      variant="link"
      textOverflow="ellipsis"
      noOfLines={1}
      maxWidth={{ md: 40 }}
      onClick={handleOnClick}
      {...props}
    >
      {props.value}
    </Button>
  );
};

export default LinkButton;
