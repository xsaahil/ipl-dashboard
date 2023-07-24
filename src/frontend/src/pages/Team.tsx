import { Spinner, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useTeam } from "../api/useTeam";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { useEffect } from "react";

export const Team = () => {
  const { team } = useParams();
  const { data, isLoading, refetch } = useTeam(team as string);

  useEffect(() => {
    refetch();
  }, [team, refetch]);

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
        <MatchDetailCard key={index} match={match} teamName={data.teamName} />
      ))}
    </VStack>
  );
};
