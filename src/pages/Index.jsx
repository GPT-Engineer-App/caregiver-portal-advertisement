import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaRegHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" maxW="1200px" m="auto">
        <Heading as="h1" size="2xl" mb={4}>
          간병인 서비스
        </Heading>
        <Text fontSize="xl" mb={6}>
          신뢰할 수 있는 전문 간병인을 통해 최고의 돌봄을 제공합니다.
        </Text>
        <Image src="https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJpbmclMjBudXJzZSUyMHdpdGglMjBlbGRlcmx5fGVufDB8fHx8MTcxMzkzMzk2OXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxSize="500px" objectFit="cover" mb={6} />
        <VStack spacing={4}>
          <Button leftIcon={<FaPhone />} colorScheme="teal" size="lg">
            지금 연락하기
          </Button>
          <Button leftIcon={<FaRegHeart />} variant="outline" size="lg">
            서비스 더 알아보기
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
