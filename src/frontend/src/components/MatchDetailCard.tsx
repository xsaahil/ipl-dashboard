import React from "react";
import { Card, CardBody, Text, VStack } from "@chakra-ui/react";
import { IMatch } from "../helpers/Types";

interface MatchDetailCardProps {
  match: IMatch;
}

export const MatchDetailCard: React.FC<MatchDetailCardProps> = ({ match }) => (
  <Card width="xl" bg="PowderBlue" marginY={2} variant="elevated">
    <CardBody>
      <VStack display={"flex"} justifyItems="center">
        <Text color="MintCream" textStyle="body">
          {match.team1} vs {match.team2}
        </Text>
        <Text color="MintCream">{match.matchWinner}</Text>
      </VStack>
    </CardBody>
  </Card>
);
