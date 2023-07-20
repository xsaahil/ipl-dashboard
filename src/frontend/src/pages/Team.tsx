import { Spinner, Text, VStack } from "@chakra-ui/react";
import { useTeam } from "../api/useTeam";
import { MatchDetailCard } from "../components/MatchDetailCard";

export const Team = () => {
  const { data, isLoading } = useTeam("Chennai Super Kings");

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  return (
    <VStack>
      <Text color="MintCream" textStyle="h1">
        {data?.teamName}
      </Text>
      <Text color="MintCream" textStyle="h2">
        Latest matches
      </Text>
      {data?.matches.map((match, index) => (
        <MatchDetailCard key={index} match={match} />
      ))}
    </VStack>
  );
};
