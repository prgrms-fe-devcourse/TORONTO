import Box from './Box';

const Paragraph = ({ line = 3, height = 16, ...props }) => {
  return (
    <div {...props}>
      {Array.from(Array(line), (_, index) =>
        index === line - 1 ? (
          <Box key={index} width='60%' height={height} />
        ) : (
          <Box key={index} width='100%' height={height} />
        ),
      )}
    </div>
  );
};

export default Paragraph;
